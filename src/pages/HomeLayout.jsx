import { Outlet } from "react-router-dom"
import { Navbar, Footer } from '../components'

function HomeLayout() {
  return (
    <>
      <Navbar />
      <main style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default HomeLayout