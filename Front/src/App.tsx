import { Layout } from 'antd'
import TabsComponent from './components/TabsComponent'


function App() {
  return (
    <Layout>
      <Layout.Header style={{ color: 'white', fontSize: '2rem', height: '200px'}}><h1>Node.js Helper</h1></Layout.Header>
      <Layout.Content>
        <TabsComponent />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Alisson Silva TDC innovation ©2023</Layout.Footer>
    </Layout>
  )
}

export default App
