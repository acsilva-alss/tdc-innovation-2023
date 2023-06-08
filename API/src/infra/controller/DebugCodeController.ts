import { Request, Response } from 'express'
import ChatGptAdapter from '../chatgpt/ChatGptAdapter'
import { DebugCode } from '../../application/DebugCode'

export class DebugCodeController{
	constructor(readonly chatGpt: ChatGptAdapter){}

	async execute(req: Request, res: Response): Promise<void> {
		try{
			const { message } = req.body
			const debugCodeUseCase = new DebugCode(this.chatGpt)
			const output = await debugCodeUseCase.execute(message)
			res.status(200).send({output})
		}catch(e){
			console.log(e)
		}
	}
}