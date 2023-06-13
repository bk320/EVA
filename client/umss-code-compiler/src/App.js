import { Layout, Menu, ConfigProvider } from "antd"
import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { ShopOutlined, TagsOutlined } from "@ant-design/icons"
import Tarea from "./task_1/ciclo_for.js"

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 15.5,
          colorPrimary: "#6b2c4b",
          colorInfo: "#ed153d",
          colorBgContainer: "#ecdde1",
          colorBgElevated: "#edd5d5",
          colorWarning: "#ff9966",
          colorError: "#eb636b",
          colorTextPlaceholder: "#666666"
        }
      }}
    >
      <AppLayout />
    </ConfigProvider>
  )
}

function AppLayout () {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Content />
    </Layout>
  )
}

function SideMenu () {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout

  return (
    <Sider
      className="sider"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        mode="inline"
        style={{
          height: "100vh"
        }}
        onClick={({ key }) => {
          navigate(key)
        }}
        items={[
          { label: "tema1", key: "/", icon: <ShopOutlined /> },
          { label: "tema2", key: "/categorias", icon: <TagsOutlined /> }
        ]}
      />
    </Sider>
  )
}

function Content () {
  const { Footer } = Layout

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Tarea />} />
      </Routes>
      <Footer style={{ textAlign: "center" }} />
    </Layout>
  )
}

export default App
