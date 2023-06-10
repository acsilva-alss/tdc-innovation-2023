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

router.post('/debug-code', (req, res) => debugCodeController.execute(req, res))
router.post('/generate-tests', (req, res) => generateTestsController.execute(req, res))
router.post('/refactoring-code', (req, res) => refactoringCodeController.execute(req, res))
router.get('/health', (req, res) => res.status(200).send({ status: 'UP'}))

export { router }