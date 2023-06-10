import React from 'react'
import { Card } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = {
  message: string
}

const Output: React.FC<Props> = ({ message }) => {
  return (
    <Card style={{marginTop:'1rem'}}>
      <SyntaxHighlighter language="javascript" style={dark}>{message}</SyntaxHighlighter>
    </Card>
  )
}

export default Output