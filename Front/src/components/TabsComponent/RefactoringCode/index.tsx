import React from 'react'
import TextArea from '../../TextArea'
import ButtonComponent from '../../ButtonComponent'
import { useInputDataContext } from '../../../context/InputDataContext'
import Output from '../../Output'

const RefactoringCode: React.FC = () => {
  const { getChatGptResponse, output } = useInputDataContext()
  const [message, setMessage] = React.useState('')
  const handleClick = async () => {
    await getChatGptResponse('/refactoring-code', message)
  }
  return (
    <>
      <p>Cole aqui o código que você deseja refatorar:</p>
      <TextArea value={message} onChange={(text) => setMessage(text.target.value)}/>
      <ButtonComponent name='Refatorar código' onClick={() => handleClick()} />
      {output ? <Output message={output} /> : null}
    </>
  )
}

export default RefactoringCode