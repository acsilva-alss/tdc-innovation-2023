import { Request, Response } from 'express'
import { GenerateTests } from '../../application/GenerateTests'
import ChatGptAdapter from '../chatgpt/ChatGptAdapter'

export class GenerateTestsController{
  constructor(readonly chatGpt: ChatGptAdapter){}

	async execute(req: Request, res: Response): Promise<void> {
		try{
			const { message } = req.body
			const debugCodeUseCase = new GenerateTests(this.chatGpt)
			const output = await debugCodeUseCase.execute(message)
			res.status(200).send({output})
		}catch(e){
			console.log(e)
		}
	}
}