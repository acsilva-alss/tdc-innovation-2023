import React from 'react'
import { Button } from 'antd'
import { useInputDataContext } from '../../context/InputDataContext'

type Props = {
  name: string
  onClick: () => void
}

const ButtonComponent: React.FC<Props> = ({ name, onClick }) => {
  const {loading} = useInputDataContext()

  const handleButoonClick = () => {
    onClick()
  }

  return (
    <Button 
      type='primary' 
      loading={loading}
      onClick={handleButoonClick}
      style={{ marginTop: '1rem'}}
    >
      {name}
    </Button>
  )


}

export default ButtonComponent