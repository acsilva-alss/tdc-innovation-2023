import dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

export default class ChatGptAdapter {
	openai: OpenAIApi
	constructor(){
		const configuration = new Configuration({
			apiKey: process.env.OPENAI_API_KEY,
			})
		this.openai = new OpenAIApi(configuration)
	}

	async sendMessage(prompt: string) {
		const response = await this.openai.createCompletion({
			model: "text-davinci-003",
			prompt,
			temperature: 0,
			max_tokens: 150,
			top_p: 1.0,
			frequency_penalty: 0.5,
			presence_penalty: 0.0,
			stop: ["You:"],
		});
		console.log(response.data.choices)
		return response.data.choices[0].text
	}
}