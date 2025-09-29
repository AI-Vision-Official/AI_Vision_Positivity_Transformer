import { transformations } from './js/transformations.js';
import { checkAndRelayAlarmingInput } from './js/safety-check.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputTextarea = document.getElementById('inputText');
    const transformButton = document.getElementById('transformButton');
    const outputTextElement = document.getElementById('outputText');
    const downloadButton = document.getElementById('downloadButton');
    const languageSelector = document.getElementById('languageSelector');

    transformButton.addEventListener('click', async () => {
        const originalText = inputTextarea.value;
        const selectedLanguageCode = languageSelector.value;
        const selectedLanguageName = languageSelector.options[languageSelector.selectedIndex].text.split(" (")[0];

        outputTextElement.innerHTML = ""; 
        if (downloadButton) downloadButton.style.display = 'none';

        if (originalText.trim() === "") {
            outputTextElement.innerHTML = "<p>It seems you haven't shared anything yet. This space is here for you to explore any thoughts or feelings you'd like to understand better. Feel free to type when you're ready. </p>";
            return;
        }

        const safetyCheckResult = await checkAndRelayAlarmingInput(originalText, selectedLanguageName);

        if (safetyCheckResult && safetyCheckResult.isAlarming) {
            outputTextElement.innerHTML = `<p>${safetyCheckResult.advice}</p>`;
            if (downloadButton) downloadButton.style.display = 'inline-block';
            return; 
        }

        let messageForOutput = "";
        let shouldUseLLM = true; 

        if (selectedLanguageCode === 'en') { 
            for (const rule of transformations) {
                if (rule.neg.global) {
                    rule.neg.lastIndex = 0; 
                }
                const match = rule.neg.exec(originalText);
                if (match) {
                    const positiveResponseGenerator = rule.pos;
                    messageForOutput = positiveResponseGenerator(...match);
                    shouldUseLLM = false; 
                    break; 
                }
            }
        }
        
        if (shouldUseLLM) {
            const languageInstruction = `IMPORTANT: Your entire response MUST be in ${selectedLanguageName}. Do not use any other language. If ${selectedLanguageName} is English, respond in English.`;
            
            const personaInstructions = `You are a compassionate assistant. The user has shared something.
Your response should be a thoughtful reflection, framed in a discussion-like tone, in a single paragraph.

Start by acknowledging the core feeling or statement itself, as if reflecting on it in a slightly generalized way. For example, if the user says "I feel X," you might start with "To feel X can often mean..." or "Experiencing X is a sign that..." or "The thought 'Y' is quite common when...". Avoid directly saying "When *you* feel X..." in the opening.

Then, offer gentle reframes, insights, or perspectives.
If their message seems to seek practical advice or solutions, adopt a 'practical counsellor' tone for your reflection.
If it seems to seek peace, acceptance of difficult truths, or a philosophical perspective, adopt a 'zen buddhist monk' tone for your reflection.
Otherwise, or if unsure, adopt a 'thoughtful psychologist' tone for your reflection (without explicitly stating you are one, just embody the supportive, insightful, and understanding qualities).

Conclude your reflection with a clear, empathetic statement that connects with the user and makes them feel heard and understood. For example: "That's a significant feeling to carry.", "It's understandable to feel that way.", "Your experience with this is clearly felt.", or "That struggle is certainly recognized."

Ensure your entire response is warm, human, and supportive.`;

            const finalSystemMessage = `${languageInstruction}\n\n${personaInstructions}`;

            try {
                const completion = await websim.chat.completions.create({
                    messages: [
                        { role: "system", content: finalSystemMessage },
                        { role: "user", content: originalText }
                    ]
                });
                messageForOutput = completion.content;
            } catch (error) {
                console.error("Error calling LLM for reframing:", error);
                messageForOutput = `I'm having a little trouble forming a deep reflection in ${selectedLanguageName} right now. Could you try rephrasing or share something else?`;
                 if (selectedLanguageCode !== 'en') { 
                    messageForOutput += ` (I can attempt a response in English if you'd like to try that.)`;
                 }
            }
        }
        
        outputTextElement.innerHTML = `<p>${messageForOutput}</p>`;
        
        if (downloadButton) {
            downloadButton.style.display = outputTextElement.textContent.trim() ? 'inline-block' : 'none';
        }
    });

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const textToSave = outputTextElement.textContent || "";
            if (!textToSave.trim()) {
                alert("There's no reflection to download yet."); 
                return;
            }
            const blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Reflective_Insight.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});