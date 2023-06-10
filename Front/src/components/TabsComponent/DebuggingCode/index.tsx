import React from 'react'
import TextArea from '../../TextArea'
import ButtonComponent from '../../ButtonComponent'
import { useInputDataContext } from '../../../context/InputDataContext'
import Output from '../../Output'

const DebuggingCode: React.FC = () => {
  const { getChatGptResponse, output } = useInputDataContext()
  const [message, setMessage] = React.useState('')

  return (
    <>
      <p>Cole aqui o código que você deseja saber o erro:</p>
      <TextArea value={message} onChange={(text) => setMessage(text.target.value)}/>
      <ButtonComponent name='Analisar código' onClick={() => getChatGptResponse('/debug-code', message)} />
      {output ? <Output message={output} /> : null}
    </>
  )
}

export default DebuggingCode