document.addEventListener('DOMContentLoaded', () => {
    const inputTextarea = document.getElementById('inputText');
    const transformButton = document.getElementById('transformButton');
    const outputTextElement = document.getElementById('outputText');
    const languageSelector = document.getElementById('languageSelector');

    const uiStrings = {
        en: {
            mainTitle: "Negativity to Positivity Transformer",
            introText: "Share your thoughts or feelings. We'll strive to offer a kind, hopeful, and uniquely tailored perspective, helping you reframe them with warmth and understanding.",
            inputTextPlaceholder: "Type something like 'I can't do this.' or 'Today feels awful.'",
            transformButtonText: "Transform with Positivity!",
            outputTitleText: "A Warm Ray of Positivity For You:",
            emptyInputMessage: "<p>Please share a thought or feeling. I'm here to listen and offer a wave of positivity. 😊</p>",
            languageSelectorLabelText: "Select Language:",
            languageChangeNoteText: "Note: Transformations are currently provided in English."
        },
        es: {
            mainTitle: "Transformador de Negatividad a Positividad",
            introText: "Comparte tus pensamientos o sentimientos. Nos esforzaremos por ofrecer una perspectiva amable, esperanzadora y adaptada de forma única, ayudándote a reformularlos con calidez y comprensión.",
            inputTextPlaceholder: "Escribe algo como 'No puedo hacer esto.' o 'Hoy me siento fatal.'",
            transformButtonText: "¡Transformar con Positividad!",
            outputTitleText: "Un Rayo Cálido de Positividad Para Ti:",
            emptyInputMessage: "<p>Por favor, comparte un pensamiento o sentimiento. Estoy aquí para escuchar y ofrecer una ola de positividad. 😊</p>",
            languageSelectorLabelText: "Seleccionar Idioma:",
            languageChangeNoteText: "Nota: Las transformaciones se proporcionan actualmente en inglés."
        }
        // Add other languages here
    };

    function updateUIForLanguage(lang) {
        const translations = uiStrings[lang] || uiStrings.en;

        document.getElementById('mainTitle').textContent = translations.mainTitle;
        document.getElementById('introText').textContent = translations.introText;
        inputTextarea.placeholder = translations.inputTextPlaceholder;
        transformButton.textContent = translations.transformButtonText;
        document.getElementById('outputTitle').textContent = translations.outputTitleText;
        document.getElementById('languageSelectorLabel').textContent = translations.languageSelectorLabelText;
        
        const langNoteElement = document.getElementById('languageChangeNote');
        if (lang === 'en') {
            langNoteElement.textContent = '';
            langNoteElement.style.display = 'none';
        } else {
            langNoteElement.textContent = translations.languageChangeNoteText;
            langNoteElement.style.display = 'block';
        }
    }

    languageSelector.addEventListener('change', (event) => {
        updateUIForLanguage(event.target.value);
        // If output has the default empty message, update it too
        if (outputTextElement.innerHTML === uiStrings.en.emptyInputMessage || outputTextElement.innerHTML === uiStrings.es.emptyInputMessage) {
             const currentLang = languageSelector.value || 'en';
             outputTextElement.innerHTML = uiStrings[currentLang].emptyInputMessage;
        }
    });
    
    // Initial UI setup
    updateUIForLanguage(languageSelector.value || 'en');


    const transformations = [
        // Prioritized for moral and compassionate handling
        {
            neg: /\bi\s+hate\s+myself\b/gi,
            pos: (match) => {
                return `Hearing you express "I hate myself" signals deep pain. It's incredibly important to meet such feelings with compassion. You are inherently worthy of love and kindness, especially from yourself. Let's gently reframe this: "I am going through a very challenging time and feeling immense pain. I commit to seeking kindness for myself, just as I would for a friend. This is a journey towards self-acceptance, and I deserve support." If these feelings persist strongly, please reach out to someone you trust or a professional. You are not alone. 💖`;
            }
        },
        {
            neg: /\bi(?:'m| am)\s+(?:so|such|just|really|a|an)\s+(stupid|idiot|moron|failure|loser|worthless|terrible person|bad person|awful person|no good)\b/gi,
            pos: (match, selfLabel) => {
                return `It sounds like you're carrying a heavy weight and being very critical of yourself with words like '${selfLabel}'. Everyone stumbles or feels inadequate sometimes; these moments don't define your true worth or potential. How about this perspective: "I am on a path of learning and growth. I treat myself with understanding and compassion, especially when I face setbacks. My value is constant." You are far more complex and capable than any single harsh label. ✨`;
            }
        },
        {
            neg: /\bi(?:'m| am)\s+(?:planning to|going to|gonna|wanna|want to)\s+(make fun of|mock|ridicule|bully|put down|belittle|shame)\s+([\w\s']+)/gi,
            pos: (match, action, target) => {
                const actionGerund = action.replace(/make fun of/i, "making fun of")
                                          .replace(/put down/i, "putting down")
                                          .replace(/belittle/i, "belittling")
                                          .replace(/shame/i, "shaming")
                                          .replace(/mock/i, "mocking")
                                          .replace(/ridicule/i, "ridiculing")
                                          .replace(/bully/i, "bullying");
                return `Choosing our words and actions with intention shapes our world. Thinking about '${actionGerund} ${target.trim()}' can create negativity. What if we focus on fostering connection and respect? Consider: "I choose to use my interactions to uplift and understand. Every individual, including ${target.trim()} and myself, deserves dignity." Empathy is a powerful bridge. 🌉`;
            }
        },
        {
            neg: /\bi(?:'m| am)\s+(?:so|really|very)?\s*(good at|skilled at|proud of|enjoy)\s+(lying|deceiving|manipulating|cheating|scamming|hurting|harming)\s*(?:others|people|them)?\b/gi,
            pos: (match, skillAdjective, skillVerb) => {
                return `It's natural to feel a sense of capability in areas we've developed. However, true strength and lasting positive connections are built on trust, honesty, and mutual respect. Using talents for '${skillVerb}' can erode these vital foundations. Perhaps explore this thought: "I aspire to use my abilities ethically, to build genuine trust, and to contribute positively to my relationships and community. My integrity is my true power." This path cultivates authentic well-being for all. 🌱`;
            }
        },
        {
            neg: /\b(it's|there's)\s+no\s+(point|use|hope)(?:\s+in\s+anything|\s+anymore)?|it's\s+all\s+hopeless|i\s+give\s+up|i\s+just\s+can't\s+go\s+on\b/gi,
            pos: (match) => {
                return `Hearing these words conveys a profound sense of despair, a truly heavy load to bear. When the world feels this dark, please remember that even the most intense feelings can shift, and support is a beacon. Hold onto a tiny spark: "Though I feel overwhelmed by hopelessness now, this feeling is not permanent. I can reach out for support, and I am worthy of healing and light. Small steps can lead towards a brighter horizon." You are not alone in this, and seeking connection can make all the difference. ☀️`;
            }
        },
        {
            neg: /\bi can't(?:\s+([\w\s']+))?\b/gi,
            pos: (match, action) => {
                action = action ? action.trim() : "handle things right now";
                return `It's perfectly okay to feel that '${action}' is beyond your reach at this moment. Acknowledging this is a sign of self-awareness. Challenges can seem daunting. Let's try this gentle reframe: "I acknowledge this feels overwhelming. I will approach '${action}' with patience, breaking it into manageable steps, and trust my inner strength to navigate it. I am capable of finding a way." Your resilience is a quiet power. 💪`;
            }
        },
        {
            neg: /\b(i am|i'm|i feel)\s+(?:really|very|so|a bit|kinda|kind of)?\s*(bad|sad|down|terrible|awful|horrible|stressed|angry|anxious|worried|upset|worthless|hopeless|useless|afraid|scared|weak|lonely|tired|sick|blue|negative)\b/gi,
            pos: (match, verbPhrase, feeling) => {
                 if (verbPhrase.match(/\b(i am|i'm)\b/gi) && (feeling === "worthless" || feeling === "useless" || feeling === "bad" || feeling === "terrible" || feeling === "hopeless")) {
                     // Let more specific rules (like "I am worthless") handle if they matched first.
                     // This check ensures this rule doesn't override a more specific one for "I am X".
                     // However, if it gets here, it means a more specific one didn't catch it, so proceed.
                 }
                return `It's completely human to ${verbPhrase.replace("i ", "you ").replace("I ", "you ")} ${feeling}. Thank you for sharing this. Naming our emotions is a brave first step. Let's honor this feeling: "I am present with this feeling of ${feeling}. I also gently remind myself of my capacity for peace and inner strength. I am deserving of comfort, understanding, and brighter moments." Sending warmth and a little bit of light your way. 🌟`;
            }
        },
        {
            neg: /\b(this is|it's|it is|that is)\s+(?:really|very|so)?\s*(bad|sad|terrible|awful|horrible|stupid|boring|annoying|pointless|difficult|impossible|ugly|a\s+waste\s+of\s+time)\b/gi,
            pos: (match, subjectPhrase, descriptor) => {
                let coreMessage = "";
                if (descriptor.toLowerCase() === "a waste of time") {
                    coreMessage = `It's frustrating when something feels like '${descriptor}'. Yet, even in such moments, there can be hidden lessons or opportunities for patience. Perhaps: "This situation is a chance for me to practice acceptance or find unexpected value, even if it's not what I initially hoped for."`;
                } else if (descriptor.toLowerCase() === "impossible") {
                    coreMessage = `When something feels '${descriptor}', discouragement is natural. But 'impossible' is often a feeling, not an unbreakable barrier. Let's try: "This feels incredibly challenging, but I am open to exploring different paths and believing in the possibility of progress."`;
                }
                else {
                    coreMessage = `It sounds like seeing this as '${descriptor}' is weighing heavily on you. Let's try to soften that perspective: "While this situation feels ${descriptor} right now, I will look for any positive aspects, lessons, or opportunities for growth within it. I can navigate through this with resilience."`;
                }
                return `It's understandable that ${subjectPhrase.toLowerCase()} ${descriptor} creates a tough experience. ${coreMessage} Remember to be kind to yourself as you move through it; your inner peace is precious. 🙏`;
            }
        },
        {
            neg: /\bi (hate|dislike)\s+([\w\s']+)/gi,
            pos: (match, feeling, object) => {
                if (object.toLowerCase().trim() === 'myself' || object.toLowerCase().trim() === 'me') { // Should be caught by more specific "I hate myself"
                    return `It's so important to treat yourself with kindness. When strong feelings like this arise about yourself, it's a signal for deep self-compassion. Let's try: "I acknowledge these intense feelings and choose to meet myself with understanding and gentleness. I am on a journey of self-acceptance." You are worthy of your own love. ❤️`;
                }
                return `It's clear that '${object.trim()}' is causing you significant distress. It's okay to have strong reactions. Sometimes, by acknowledging the feeling, we can then choose where to direct our energy. Perhaps: "I accept my strong feelings about '${object.trim()}', and I now choose to focus my energy on finding peace, understanding, or solutions that bring me comfort and growth."`;
            }
        },
        {
            neg: /\b(i will never|it will never)\s+([\w\s']+)/gi,
            pos: (match, subject, action) => {
                return `Words like "never" can cast a long shadow, making things feel very final. It's natural to feel this way when facing difficulties. Yet, life is full of unexpected turns and growth. Let's open a window: "It might feel like '${subject.toLowerCase()} ${action.trim()}' is an unchangeable truth right now, but I remain open to the possibility of positive shifts and will continue to cultivate hope and strive towards what I value." The future is unwritten. 🌈`;
            }
        },
        {
            neg: /\b(my|the|a)\s+(problem|issue)\s+is\b/gi,
            pos: (match, article, noun) => {
                return `When we frame something as a '${noun}', it can feel like a heavy burden. What if we see it as a challenge or an invitation for growth? Consider this: "This situation presents a challenge, and I am capable of exploring compassionate ways to navigate it. It's an opportunity for me to learn more about myself and develop my inner resources." Every challenge holds a potential gift. 🎁`;
            }
        },
         {
            neg: /\b(i have|i've got|i'm having)\s+a\s+(bad|terrible|awful|horrible)\s+(day|time|moment|experience)\b/gi,
            pos: (match, verbPhrase, adjective, noun) => {
                return `It sounds like you're navigating a really ${adjective} ${noun}, and that's undoubtedly tough. Everyone has these periods. This is a time for extra self-kindness. Perhaps affirm: "Even though this ${noun} feels intensely ${adjective}, I can find small ways to nurture myself and look for a flicker of light or peace. This, too, will evolve." Be gentle with your heart. 💖`;
            }
        }
    ];

    transformButton.addEventListener('click', () => {
        const originalText = inputTextarea.value;
        let transformedMessage = "";
        let transformationApplied = false;
        const currentLang = languageSelector.value || 'en';

        if (originalText.trim() === "") {
            outputTextElement.innerHTML = uiStrings[currentLang].emptyInputMessage;
            return;
        }

        for (const rule of transformations) {
            if (rule.neg.global) {
                rule.neg.lastIndex = 0;
            }
            const match = rule.neg.exec(originalText);
            if (match) {
                transformedMessage = originalText.replace(rule.neg, (...args) => {
                    const callbackArgs = args.slice(0, -2);
                    return rule.pos(...callbackArgs);
                });
                
                // Check if the transformation actually changed the text or if the original text itself matched the pattern
                // This helps ensure a rule that *could* match but its pos function returns originalText (less likely now)
                // or simply if a match occurred.
                if (transformedMessage !== originalText || originalText.match(rule.neg)) { 
                    transformationApplied = true;
                    break;
                }
            }
        }
        
        if (transformationApplied) {
            outputTextElement.innerHTML = `<p>${transformedMessage}</p>`;
        } else {
            outputTextElement.innerHTML = `<p>Thank you for sharing your unique thought. While I may not have a specific reframe for this particular expression, I encourage you to approach it with gentle curiosity and self-compassion. Every thought and feeling is a part of your journey. May you find opportunities for growth, kindness, and hope in unexpected places. Your voice is important. ✨</p>`;
        }
    });
    
    // Set initial placeholder for output based on language
    const initialLang = languageSelector.value || 'en';
    outputTextElement.innerHTML = uiStrings[initialLang].emptyInputMessage;
});