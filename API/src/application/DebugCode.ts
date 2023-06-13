import ChatGptAdapter from '../infra/chatgpt/ChatGptAdapter'

export class DebugCode{
	constructor(readonly chatGpt: ChatGptAdapter){}

	async execute(message: string): Promise<string | undefined> {
		const formattedMessage = 
			`Qual o problema do código a seguir: ${message}`
		return this.chatGpt.sendMessage(formattedMessage)
	}
}