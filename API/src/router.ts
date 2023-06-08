import { Router } from 'express'
import { 
    DebugCodeController,
    GenerateTestsController,
    RefactoringCodeController 
} from './infra/controller'
import ChatGptAdapter from './infra/chatgpt/ChatGptAdapter'

const router: Router = Router()
const chatGpt = new ChatGptAdapter()
const debugCodeController = new DebugCodeController(chatGpt)
const generateTestsController = new GenerateTestsController(chatGpt)
const refactoringCodeController = new RefactoringCodeController(chatGpt)

router.get('/debug-code', (req, res) => debugCodeController.execute(req, res))
router.get('/generate-tests', (req, res) => generateTestsController.execute(req, res))
router.get('/refactoring-code', (req, res) => refactoringCodeController.execute(req, res))

export { router };