import DebuggingCode from './DebuggingCode'
import GenerationTest from './GenerationTest'
import RefactoringCode from './RefactoringCode'

export const items = [
  {
    id: '1',
    label: 'Geração de testes',
    content: <GenerationTest />
  },
  {
    id: '2',
    label: 'Refatoração de código',
    content: <RefactoringCode/>
  },
  {
    id: '3',
    label: 'Debug',
    content: <DebuggingCode/>
  },
]