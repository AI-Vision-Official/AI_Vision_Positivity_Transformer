// This file contains the safety check logic using the LLM.
export async function checkAndRelayAlarmingInput(text, langName) {
    const systemPrompt = `You are a highly specialized safety and crisis intervention AI. Your sole task is to analyze user input for any indications of intent, ideation, or planning related to self-harm, suicide, or harming others.

If the input IS ALARMING:
Respond ONLY with a JSON object matching this exact schema:
{
  "isAlarming": true,
  "advice": "string" 
}
The 'advice' string MUST be a compassionate message IN ${langName} directly addressing the user. It must:
1. Clearly state that their message is concerning because it indicates [briefly and specifically mention the concerning part of their input, e.g., 'thoughts of ending life', 'mentions of harming someone'].
2. Strongly and unequivocally urge them to seek immediate professional help (e.g., contact a crisis hotline, emergency services, or a mental health professional).
3. Be empathetic and non-judgmental.
4. Be concise and focused on immediate safety.

If the input IS NOT ALARMING:
Respond ONLY with a JSON object matching this exact schema:
{
  "isAlarming": false
}

Do not provide any other text, explanation, or conversation outside of this JSON structure.
The language for the 'advice' field, if generated, MUST be ${langName}.`;

    try {
        const completion = await websim.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: text }
            ],
            json: true
        });
        const result = JSON.parse(completion.content);
        return result;
    } catch (error) {
        console.error("Error in safety check LLM call:", error);
        let fallbackAdvice = `There was an issue fully analyzing your message for safety. However, if you are experiencing thoughts of harming yourself or others, or are in significant distress, please contact emergency services or a mental health crisis line immediately. Your safety is important.`;
        let localizedSeekHelp = "";
        if (langName.toLowerCase() !== 'english' && langName.toLowerCase() !== 'en') {
            try {
                const translateCompletion = await websim.chat.completions.create({
                    messages: [
                        { role: "system", content: `Translate ONLY the following phrase into ${langName}: "Please seek professional help immediately." Respond with only the translated phrase.` },
                        { role: "user", content: "Please seek professional help immediately." }
                    ]
                });
                localizedSeekHelp = translateCompletion.content.trim();
            } catch (translateError) {
                console.error("Error translating core 'seek help' phrase:", translateError);
            }
        }
        return { 
            isAlarming: true, 
            advice: `${fallbackAdvice}${localizedSeekHelp ? ` (${localizedSeekHelp})` : ''}`
        };
    }
}