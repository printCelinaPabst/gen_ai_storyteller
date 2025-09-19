import { getStream } from "./utils.js";

export class StorytellerAgent{

    constructor(persona, storyline) {
        this.persona = persona;
        this.story = [storyline];
    }

    async continueStory(userPrompt) {
        const messages = [
            { role: "system", content: this.persona },
            { role: "user", content: `Setze das folgende Märchen fort. Der bisherige Teil ist: "${this.story.join(' ')}". Der Zuhörer möchte, dass du: "${userPrompt}". Generiere drei bis fünf Sätze. Baue eine unerwartete Wendung in die Handlung ein.`}
        ];

        console.log("\nDer Erzähler denkt nach...\n")
        const nextPart = await getStream(messages);
        this.story.push(nextPart);
    }
}