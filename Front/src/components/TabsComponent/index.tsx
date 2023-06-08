import React from 'react'
import { Tabs } from 'antd';
import { items } from './helpers';

const TabsComponent: React.FC = () => {
  return(
    <Tabs 
      onChange={() => console.log('mudou')}
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
