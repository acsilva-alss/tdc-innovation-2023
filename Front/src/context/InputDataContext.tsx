import React, { createContext } from 'react'
import api from '../services/api'

type PropsInputDataContext = {
  output: string,
  setOutput: React.Dispatch<React.SetStateAction<string>>
  getChatGptResponse: (url: string, message: string) => Promise<string>
}

const defaultValue = {
  output: '',
  setOutput: () => {},
  getChatGptResponse: () => Promise.resolve('')
}

const InputDataContext = createContext<PropsInputDataContext>(defaultValue)

const InputDataContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [output, setOutput] = React.useState('')

  async function getChatGptResponse(url: string, message: string): Promise<string> {
    try{
      const apiResponse = await api.post(url,{message})
      setOutput(apiResponse.data.output)
    } catch(e){
      console.log(e)
    }
    return ''
  }
  return (
    <InputDataContext.Provider
      value={{
        output,
        setOutput,
        getChatGptResponse
      }}
    >
      {children}
    </InputDataContext.Provider>
  )
}

function useInputDataContext(): PropsInputDataContext {
  const context = React.useContext(InputDataContext)

  if (!context)
    throw new Error(
      'useInputDataContext must be used within an InputDataContextProvider.'
    )
  return context
}

export { InputDataContextProvider, useInputDataContext }