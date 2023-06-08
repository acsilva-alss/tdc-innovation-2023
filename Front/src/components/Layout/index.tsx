import React, { ReactNode } from 'react'
type Props = {
  children: ReactNode
}
const Layout: React.FC<Props>  = ({children}) => {
  return(
    <div>
      <div>
        <h1>Node.js Helper</h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout