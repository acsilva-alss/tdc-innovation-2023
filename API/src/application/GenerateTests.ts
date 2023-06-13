import ChatGptAdapter from '../infra/chatgpt/ChatGptAdapter'

export class GenerateTests{
  constructor(readonly chatGpt: ChatGptAdapter){}

	async execute(message: string): Promise<string | undefined> {
    const formattedMessage = 
			`Gere testes utilizando jest para a seguinte função: ${message}`
		return this.chatGpt.sendMessage(formattedMessage) 
	}
}