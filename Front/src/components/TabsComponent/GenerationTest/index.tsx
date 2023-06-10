import React from 'react'
import TextArea from '../../TextArea'
import ButtonComponent from '../../ButtonComponent'
import { useInputDataContext } from '../../../context/InputDataContext'
import Output from '../../Output'


const GenerationTest: React.FC = () => {
  const { getChatGptResponse, output } = useInputDataContext()
  const [message, setMessage] = React.useState('')
  return (
    <>
      <p>Cole aqui o código que você deseja gerar os testes:</p>
      <TextArea value={message} onChange={(text) => setMessage(text.target.value)}/>
      <ButtonComponent name='Gerar testes' onClick={() => getChatGptResponse('/generate-tests', message)}/>
      {output ? <Output message={output} /> : null}
    </>
  )
}

export default GenerationTest