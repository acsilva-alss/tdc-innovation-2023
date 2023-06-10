import React from 'react'
import { Input } from 'antd'
type Props = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}
const TextArea: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Input.TextArea 
      value={value} 
      onChange={onChange} 
      rows={8}
    />
  )
}

export default TextArea