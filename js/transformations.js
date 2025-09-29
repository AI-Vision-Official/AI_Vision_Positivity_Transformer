// This file contains the predefined transformations for negative inputs.
export const transformations = [
    {
        neg: /\bi\s+hate\s+myself\b/gi,
        pos: (match) => {
            const responses = [
                `To express something as intense as "I hate myself" points to a profound level of emotional distress. Such self-criticism often stems from deeply internalized negative beliefs or experiences. It's crucial to understand that these feelings, however powerful, are not an objective measure of worth. A helpful approach involves gently questioning the utility and truth of this statement. Consider exploring: "This feeling of self-rejection is incredibly painful right now. What experiences or beliefs might be fueling it? Can I practice extending a small moment of compassion to myself, as I might to a friend in similar pain? This feeling is a part of my experience, but it does not define my entire being." That's a very heavy sentiment to hold, and it's truly heard. If these feelings are persistent, discussing them with a supportive professional can be an invaluable step.`,
                `Articulating "I hate myself" signals a significant internal struggle. It can be helpful to explore the roots of such feelings, as they often mask unmet needs or past hurts. The human mind is complex, and self-compassion is a vital tool for healing. Instead of harsh judgment, one might try to reframe with self-understanding: "I am experiencing intense feelings of self-criticism. These feelings are valid and point to an area where I need support and kindness, especially from myself. I am inherently worthy of care, and I can begin to explore what treating myself with gentleness looks like, even in small ways." The depth of this feeling is clearly communicated, and remember, reaching out for support is a sign of self-awareness and strength.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\bi(?:'m| am)\s+(?:so|such|just|really|a|an)\s+(stupid|idiot|moron|failure|loser|worthless|terrible person|bad person|awful person|no good)\b/gi,
        pos: (match, selfLabel) => {
            const responses = [
                `To label oneself with a term like '${selfLabel}' often comes from a place of deep self-criticism. These kinds of global negative self-labels can be very impactful, as they tend to overshadow more nuanced qualities and strengths. It's essential to differentiate between a behavior or a feeling in a specific moment, and overall worth as a person. One could reframe this by thinking: "I'm feeling very critical of myself right now, perhaps because of a specific situation or thought. This feeling, or this label '${selfLabel}', does not represent the totality of who I am. Everyone makes mistakes or has moments of doubt; this is part of being human. I can practice self-compassion and look at this situation with more understanding." That's a harsh judgment to place on oneself, and the pain in that is recognized.`,
                `Using such a strong label as '${selfLabel}' for oneself suggests a significant amount of inner pain. It's often more helpful to see such statements as expressions of distress rather than objective truths. Inherent worth is not diminished by perceived flaws or mistakes. A more compassionate and constructive internal dialogue might be: "This self-critical thought, labeling myself as '${selfLabel}', is very strong right now. However, I recognize that this is a thought, not a complete definition of me. I can choose to challenge this thought and treat myself with the kindness and understanding I deserve, especially when I'm struggling." It's understandable to feel that way when self-critical thoughts are strong, and that feeling is heard.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\bi(?:'m| am)\s+(?:planning to|going to|gonna|wanna|want to)\s+(make fun of|mock|ridicule|bully|put down|belittle|shame)\s+([\w\s']+)/gi,
        pos: (match, action, target) => {
            const actionGerund = action.replace(/make fun of/i, "making fun of")
                                      .replace(/put down/i, "putting down")
                                      .replace(/bully/i, "bullying");
            const responses = [
                `When thoughts about actions like '${actionGerund} ${target.trim()}' arise, it can be an important moment for self-reflection. Impulses to belittle others can sometimes stem from our own insecurities, frustrations, or a desire for a sense of power. However, such actions often damage relationships and can negatively impact our own self-perception in the long run. A more constructive approach focuses on empathy and connection: "I recognize this thought/impulse to '${action}'. I can choose instead to cultivate understanding and respectful communication. How can I interact in a way that aligns with my values of kindness and empathy, fostering positive connections rather than discord?" This points to an internal conflict worth exploring, and the impulse is acknowledged.`,
                `When thoughts of '${actionGerund} ${target.trim()}' come up, it's an opportunity to pause and explore the underlying feelings or motivations. Sometimes, these impulses are a way of coping with difficult emotions. True strength and positive influence are built on respect and empathy, not on diminishing others. Consider this reframe: "This thought about '${action}' is present. I can choose to respond by focusing on constructive ways to manage my own feelings and to interact with others respectfully. Building positive relationships based on mutual dignity is more aligned with my long-term well-being and the kind of person I aspire to be." Reflecting on this can be quite revealing, and the presence of such thoughts is noted.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\bi(?:'m| am)\s+(?:so|really|very)?\s*(good at|skilled at|proud of|enjoy)\s+(lying|deceiving|manipulating|cheating|scamming|hurting|harming)\s*(?:others|people|them)?\b/gi,
        pos: (match, skillAdjective, skillVerb) => {
            const responses = [
                `It's interesting to reflect when someone perceives skills such as being '${skillAdjective} ${skillVerb}'. While certain behaviors might seem to offer short-term gains, actions like '${skillVerb}' tend to erode trust and can lead to significant interpersonal difficulties and internal conflict. Long-term well-being and healthy relationships are generally fostered by integrity, honesty, and genuine connection. A more fulfilling path involves redirecting talents towards constructive ends: "I acknowledge this perception of being skilled at '${skillVerb}'. I can choose to apply my abilities in ways that build trust, foster genuine connections, and align with ethical principles. This approach is more likely to lead to sustainable positive outcomes and a stronger sense of self-respect." This kind of self-assessment warrants a deeper look, and the thought process behind it is recognized.`,
                `Identifying with being '${skillAdjective} ${skillVerb}' presents a valuable point for introspection. While some might see a temporary advantage in such behaviors, they often lead to a disconnected self and can damage the fabric of relationships. True personal strength and lasting positive impact come from authenticity and ethical conduct. Consider reframing this: "I recognize this thought about my ability in '${skillVerb}'. I choose to focus on developing and using my skills in ways that are honest, constructive, and contribute positively to my relationships and community. This is where true fulfillment and self-worth are cultivated." Understanding the allure and consequences here is key, and this reflection is noted.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\b(it's|there's)\s+no\s+(point|use|hope)(?:\s+in\s+anything|\s+anymore)?|it's\s+all\s+hopeless|i\s+give\s+up|i\s+just\s+can't\s+go\s+on\b/gi,
        pos: (match) => {
            const responses = [
                `Phrases like "${match}" undoubtedly convey a profound sense of despair and hopelessness, which are incredibly heavy emotions to bear. These states can feel all-consuming, but it's essential to remember that feelings, however intense, are often temporary and can change. A path forward encourages finding even small anchors of hope or possibility. A gentle reframing could be: "I am currently experiencing overwhelming feelings of hopelessness. This is a sign that I am in significant emotional pain. While it's hard to see beyond this right now, I can acknowledge this feeling and allow for the possibility that support exists and that things can shift, even if I don't know how yet. Reaching out can be a first step." The weight of such feelings is truly understood, and your experience is acknowledged. If these feelings are persistent, please consider seeking support from a mental health professional.`,
                `When sentiments like "${match}" are expressed, it suggests a deep sense of being overwhelmed, perhaps to the point where continuing feels impossible. This is often a sign that coping resources are severely depleted. It's vital to approach this with utmost compassion in such moments. Rather than accepting this as a final state, it can be explored as a current, very difficult experience: "This feeling of utter despair and hopelessness is incredibly intense right now. It's okay to acknowledge the depth of this pain. I will try to remind myself that I deserve support, and that even if I can't see a way forward at this moment, small steps towards seeking help or self-care are possible. This feeling does not have to be my permanent reality." The intensity here is palpable, and it's heard. Seeking professional guidance is a strong and courageous act when feeling this way.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\bi can't(?:\s+([\w\s']+))?\b/gi,
        pos: (match, action) => {
            action = action ? action.trim().toLowerCase() : "cope with this situation";
            const specificAction = action !== "cope with this situation" ? `'${action}'` : "this";
            const responses = [
                `To feel "I can't" when facing ${specificAction} is a very common human response to stress or perceived difficulty. This often indicates that the challenge feels larger than current perceived resources. Instead of viewing this as an absolute inability, one can explore it as a signal. Consider this perspective: "Right now, the thought of tackling ${specificAction} feels overwhelming, and I'm telling myself 'I can't.' This is a valid feeling. Perhaps I can break ${specificAction} into much smaller pieces, or identify one tiny first step. What resources, internal or external, could I draw upon? It's okay if progress is slow; the aim is to shift from 'I can't' to 'What's one small thing I *could* try?'" That sense of being unable to proceed is a powerful one, and it's heard.`,
                `Saying "I can't do ${specificAction}" often reflects a state of feeling stuck or disempowered. It can be helpful to explore what underlies this feeling. Is it fear of failure, lack of information, or feeling overwhelmed? A helpful reframe is to shift from a global statement of incapacity to a more specific and manageable approach: "The idea of ${specificAction} feels impossible to me at this moment. I acknowledge this feeling. I wonder if I can re-examine the task. Is it truly impossible, or does it just *feel* that way right now? What support or change in perspective might make a small part of it feel more approachable?" It's clear that this feels like a significant barrier, and that feeling is understood.`,
                `When one feels "I can't" regarding ${specificAction}, it's essential to validate that experience; it's a genuine feeling of being up against a barrier. "I can't" statements can sometimes become self-fulfilling. We can gently challenge this by focusing on agency and incremental steps: "This feeling that I can't manage ${specificAction} is very strong. I accept that. However, I also know that I have overcome challenges before. What if I approach ${specificAction} not as one huge obstacle, but as a series of smaller challenges? What is the very first, least intimidating step I could consider?" This is a powerful, yet common, barrier, and the struggle is recognized.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\b(i am|i'm|i feel)\s+(?:really|very|so|a bit|kinda|kind of)?\s*(bad|sad|down|terrible|awful|horrible|stressed|angry|anxious|worried|upset|worthless|hopeless|useless|afraid|scared|weak|lonely|tired|sick|blue|negative)\b/gi,
        pos: (match, verbPhrase, feeling) => {
            const userFeeling = feeling.toLowerCase();
            let userIsOrFeels = "feeling";
            if (verbPhrase.match(/\b(i am|i'm)\b/gi)) userIsOrFeels = "identifying with being";

            const responses = [
                `It's completely natural and human for someone to be ${userIsOrFeels} ${userFeeling} at times. Acknowledging these emotions is a key aspect of emotional intelligence. Feelings like '${userFeeling}' are signals, providing us with information about our internal state or our environment. Instead of judging the feeling, one can approach it with curiosity and self-compassion: "I recognize that I am currently ${userIsOrFeels} ${userFeeling}. This feeling is valid. What might this feeling be telling me? I can allow myself to experience this without it defining my entire self, and I can also seek comfort or support if needed. My capacity for other feelings remains." This experience of being ${userFeeling} is deeply understood, and your honesty in sharing it is appreciated.`,
                `Hearing that someone is ${userIsOrFeels} ${userFeeling} suggests an attunement to their emotional landscape, which is a strength. All emotions serve a purpose, even difficult ones like '${userFeeling}'. The aim isn't to eliminate these feelings, but to understand them and respond in healthy ways. A gentle reframe could be: "This experience of ${userIsOrFeels} ${userFeeling} is present for me now. I can meet this feeling with acceptance and kindness towards myself. While this feeling is here, I am also more than this feeling. I can explore what soothes or supports me when I feel this way." This awareness is a good starting point, and that feeling of ${userFeeling} is certainly acknowledged.`,
                `It's perfectly okay when someone is ${userIsOrFeels} ${userFeeling}; these are common parts of the human experience. When such feelings arise, well-being involves acknowledging them without letting them overwhelm us. Consider this internal stance: "I accept that I am ${userIsOrFeels} '${userFeeling}' right now, and that's part of my current experience. I can also remember that I possess resilience and the ability to navigate difficult emotions. I will treat myself with gentleness and look for small ways to nurture my well-being as I move through this." Many share this feeling from time to time, and it's valid to experience ${userFeeling}.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\b(this is|it's|it is|that is)\s+(?:really|very|so)?\s*(bad|sad|terrible|awful|horrible|stupid|boring|annoying|pointless|difficult|impossible|ugly|a\s+waste\s+of\s+time)\b/gi,
        pos: (match, subjectPhrase, descriptor) => {
            const lcDescriptor = descriptor.toLowerCase();
            let coreMessages;
            if (lcDescriptor === "a waste of time") {
                coreMessages = [
                    `It's understandable to feel frustration when an experience is perceived as '${descriptor}'. This often relates to unmet expectations or a feeling of unproductive effort. However, even in experiences that feel like a waste, there can be opportunities for learning – perhaps about our preferences, boundaries, or how we might approach similar situations differently in the future. Consider: "This situation feels like '${descriptor}' to me. What can I learn from this experience, even if it's not what I hoped for? How can this inform my future choices?"`,
                    `Labeling something as '${descriptor}' can reflect genuine disappointment. We can reframe this by focusing on agency and extracting value. "This experience didn't meet my expectations and feels like '${descriptor}'. Acknowledging this, can I identify any unintended lesson or insight? How can I use this experience to clarify what is truly valuable for me to invest my time and energy in?"`,
                    `When something feels like '${descriptor}', it's easy to feel discouraged. A helpful approach here is to shift from a passive sense of loss to active meaning-making: "My current assessment is that this was '${descriptor}'. While this is a valid feeling, I can also explore if there are any aspects of this experience, no matter how small, that could contribute to my growth or understanding. Perhaps it clarifies what I *don't* want, which is also valuable information."`
                ];
            } else if (lcDescriptor === "impossible") {
                coreMessages = [
                    `Describing something as '${descriptor}' often signifies a feeling of being completely stuck or overwhelmed. The label 'impossible' can shut down problem-solving. We can gently challenge this by exploring possibilities: "This feels '${descriptor}' to me right now. Is it objectively impossible, or does it feel impossible based on my current perspective or resources? What small adjustments or new information might shift this perception even slightly?"`,
                    `The word '${descriptor}' carries a lot of weight and finality. It's often more helpful to see 'impossible' as a current assessment rather than a permanent state. "This task or situation appears '${descriptor}' from where I stand now. I can break down why it feels this way. Are there smaller components that *are* manageable? Could a different approach or additional support change this feeling?"`,
                    `It's a strong statement to say something is '${descriptor}'. This often arises when the path forward isn't clear. We can foster a mindset of exploration: "The current feeling is that this is '${descriptor}'. I acknowledge how daunting that seems. What if I were to explore it as a complex challenge rather than an impossibility? What are the specific barriers, and can any of them be addressed, even partially?"`
                ];
            } else {
                 coreMessages = [
                    `Perceiving a situation as '${descriptor}' certainly makes it feel heavy and negative. Our interpretations significantly shape our experience. While validating your current view, we can also explore alternative perspectives: "I'm currently seeing this as '${descriptor}', and that's a difficult experience. Are there any other ways to view this situation, or any aspects I might be overlooking? What can I learn or how can I grow, even within this challenging context?"`,
                    `Acknowledging that something feels '${descriptor}' is an important first step. The next step can be to consider how this perception impacts you and if there's room for a more empowering interpretation: "This situation presents as '${descriptor}' to me. While I honor that feeling, I also want to explore if there are constructive responses available to me. How can I navigate this in a way that aligns with my resilience and capacity for growth?"`,
                    `When something is strongly felt as '${descriptor}', it's natural to feel distressed. A helpful approach would involve accepting this feeling, and then gently questioning if this is the *only* way to see it: "This truly feels '${descriptor}' at the moment. I allow myself to feel that. And, I can also ask myself: Is there any potential for learning or positive adaptation here? How can I practice self-compassion as I deal with this?"`
                ];
            }
            const chosenCoreMessage = coreMessages[Math.floor(Math.random() * coreMessages.length)];
            return `When something, like ${subjectPhrase.toLowerCase().replace(/^it's|^that is|^this is/, 'what is described')}, is characterized as '${descriptor}', it's a significant assessment and understandably evokes strong feelings. ${chosenCoreMessage} It's essential to approach such experiences with patience and self-kindness. This perspective is clearly felt and understood.`;
        }
    },
    {
        neg: /\bi (hate|dislike)\s+([\w\s']+)/gi, 
        pos: (match, feeling, object) => {
            const lcObject = object.trim().toLowerCase();
            const responses = [
                `Strong feelings like '${feeling}' towards '${lcObject}' indicate that it's having a significant negative impact. It's crucial to acknowledge the intensity of such emotions. The goal isn't to suppress these feelings, but to understand them and find constructive ways to manage their impact. Consider: "I have a strong aversion, a feeling of '${feeling}', towards '${lcObject}'. This feeling is real. What are the underlying reasons for this? While I acknowledge this, I can also choose to focus on managing my response to it, perhaps by setting boundaries, seeking understanding, or shifting my attention towards aspects of my life that bring peace and well-being." This strong aversion is certainly noted, and the feeling is heard.`,
                `Experiencing '${feeling}' for '${lcObject}' suggests a deep level of discomfort or distress. These strong negative emotions can consume a lot of mental energy. While validating the feeling, one can also explore how to reduce its power over well-being: "My feelings about '${lcObject}' are intense, and I recognize that. I can explore what these feelings are trying to tell me. Can I also cultivate a space for emotional regulation, so that this feeling doesn't dominate my experience? Focusing on what I *can* control and on self-care is a constructive path." The depth of this feeling is understood, and it's acknowledged.`,
                `It's clear that '${lcObject}' evokes a powerful response when one expresses '${feeling}' it. One can look at the function of such emotions. What is this '${feeling}' communicating? While acknowledging its presence, a helpful step is to consider how you can channel this emotional energy: "I recognize this strong emotion of '${feeling}' regarding '${lcObject}'. I can use this awareness to either seek constructive solutions if possible, or to consciously redirect my focus and energy towards things that nurture my sense of peace and agency, rather than letting this feeling deplete me." This highlights a significant emotional reaction, and it's recognized.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\b(i will never|it will never)\s+([\w\s']+)/gi,
        pos: (match, subject, action) => {
            const lcSubject = subject.toLowerCase();
            const lcAction = action.trim().toLowerCase();
            const responses = [
                `Statements like "${lcSubject} ${lcAction}" often reflect a deep sense of frustration or finality, which is understandable when facing persistent challenges. Such "all-or-nothing" thinking can limit our perception of possibilities. While the current feeling is valid, life is inherently dynamic. A more open stance might be: "Right now, it truly feels as though '${lcSubject} ${lcAction}', and this is a difficult feeling to hold. However, I can acknowledge that the future is not entirely predictable. I can remain open to the possibility of change, new information, or unforeseen developments, even if I don't see them now." This sense of finality is a heavy weight, and that feeling is understood.`,
                `Using the word "never," as in "${lcSubject} ${lcAction}," suggests a feeling of certainty about a negative outcome. This can be a way of coping with disappointment, but it can also close doors to potential future shifts. It's helpful to differentiate between a current strong feeling and an unchangeable future reality: "The thought that '${lcSubject} ${lcAction}' is very present and feels true for me now. I can validate this current experience of certainty. And, I can also choose to hold a small space for the unknown, recognizing that circumstances and perspectives can evolve over time." This certainty speaks volumes about the current struggle, and it's heard.`,
                `It's natural to feel that "${lcSubject} ${lcAction}" when feeling discouraged or having experienced repeated setbacks. This reflects a sense of hopelessness in that specific area. It's useful to consider that "never" is a very absolute term. One can reframe this by saying: "My experience up to this point makes it feel like '${lcSubject} ${lcAction}'. This is a heavy burden. While acknowledging this, I can also try to focus on what *is* within my control, and remain observant for any small shifts or new opportunities that might challenge this 'never' belief, however small they may be." The discouragement in this statement is clear, and the feeling behind it is acknowledged.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
    {
        neg: /\b(my|the|a)\s+(problem|issue)\s+is\b/gi,
        pos: (match, article, noun) => {
            const responses = [
                `When something is framed as "${article} ${noun}," as in "${match}...", it can sometimes feel like a fixed part of oneself or an insurmountable obstacle. It can be more empowering to reframe this as a 'challenge one is currently navigating' or 'a situation one is working through.' This language implies process and an active role in it. Consider thinking: "I am currently facing a challenge related to [the situation mentioned]. This is a situation I am actively working to understand and address. What resources or strategies can I bring to this challenge?" This framing of a situation is quite common, and the concern is understood.`,
                `Identifying something as '${article} ${noun}' is a clear way to articulate a concern. The language we use matters. Shifting from '${noun}' to 'a current difficulty' or 'a point of focus for growth' can change our relationship to it. For example: "This situation, which I'm currently perceiving as '${article} ${noun}', presents an opportunity for me to develop new coping strategies or insights. How can I approach this 'difficulty' with curiosity and a focus on learning?" This perspective on the '${noun}' is noted.`,
                `It's common to refer to difficulties as '${article} ${noun}'. One might explore what it means to label it this way. Reframing it slightly can open up new avenues for thought and action: "I'm experiencing what feels like '${article} ${noun}'. I can acknowledge the difficulty this presents. I can also view this as a 'current area of focus' where I can apply my problem-solving skills and seek support or new perspectives to navigate it effectively. What can I learn from engaging with this?" This way of seeing the '${noun}' is certainly recognized.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    },
     {
        neg: /\b(i have|i've got|i'm having)\s+a\s+(bad|terrible|awful|horrible)\s+(day|time|moment|experience)\b/gi,
        pos: (match, verbPhrase, adjective, noun) => {
            const responses = [
                `Going through a genuinely ${adjective} ${noun} is tough, and it's essential to acknowledge that. When one is having such an ${noun}, self-compassion is paramount. It's about recognizing distress without judgment. Perhaps one can tell oneself: "This ${noun} is indeed ${adjective}, and it's okay to feel this way. I can offer myself some understanding and gentleness. This is a temporary state, and I can focus on small ways to care for myself until this ${noun} passes." This is a very relatable experience, and it's clear this ${noun} is ${adjective}.`,
                `Hearing that someone is having a ${adjective} ${noun} points to a challenging experience. Everyone has such ${noun}s, and the key is how we respond to ourselves during them. A compassionate internal response might be: "This ${noun} feels ${adjective}, and that's a valid experience. My worth isn't diminished by having a hard ${noun}. I will prioritize self-care, even in small ways, and remind myself that feelings and situations are not permanent. I can navigate through this." It's clear this ${noun} is difficult, and that experience is heard.`,
                `Experiencing a ${adjective} ${noun} is undoubtedly difficult. It's healthy to allow oneself to feel what one is feeling without adding extra pressure or self-criticism. Consider this thought: "This is a ${adjective} ${noun}, and I accept that. I don't need to be 'strong' in a way that denies my current struggle. Instead, I can be strong by being kind to myself, seeking comfort if needed, and remembering that this intensity is for this ${noun}, not forever. I have navigated difficult ${noun}s before." The difficulty of this ${noun} is acknowledged, and it's understood.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
];