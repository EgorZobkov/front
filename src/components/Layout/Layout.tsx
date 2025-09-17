import type { PropsWithChildren } from 'react'
import BottomMenu from '../BottomMenu/BottomMenu'
import './Layout.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <main className="layout__container">{children}</main>
      <BottomMenu />
    </div>
  )
}

export default Layout
