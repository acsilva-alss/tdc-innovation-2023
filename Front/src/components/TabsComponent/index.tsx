import React from 'react'
import { Tabs } from 'antd';
import { items } from './helpers';
import { useInputDataContext } from '../../context/InputDataContext'

const TabsComponent: React.FC = () => {
  const { setOutput } = useInputDataContext()
  return(
    <Tabs 
      onChange={() => setOutput('')}
      type='card'
      items={items.map(item => (
        {
          label: item.label,
          key: item.id,
          children: item.content
        }
      ))}
    />
  )
}

export default TabsComponent
