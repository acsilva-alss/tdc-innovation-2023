import ChatGptAdapter from '../infra/chatgpt/ChatGptAdapter'

export class RefactoringCode{
  constructor(readonly chatGpt: ChatGptAdapter){}

	async execute(message: string): Promise<string> {
    const formattedMessage = `Refatore a função a seguir utilizando os padrões do clean code e do refactoring: ${message}`
		return this.chatGpt.sendMessage(formattedMessage) as unknown as string
	}
}