import React from 'react'
import { Button } from 'antd'

type Props = {
  name: string
  onClick: () => void
}

const ButtonComponent: React.FC<Props> = ({ name, onClick }) => {
  const [loadings, setLoadings] = React.useState<boolean[]>([])

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }

  const handleButoonClick = () => {
    enterLoading(1)
    onClick()
  }

  return (
    <Button 
      type='primary' 
      loading={loadings[1]}
      onClick={handleButoonClick}
      style={{ marginTop: '1rem'}}
    >
      {name}
    </Button>
  )


}

export default ButtonComponent