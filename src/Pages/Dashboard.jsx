import { useState } from 'react'
import './Dashboard.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      
    </div>
  )
}

export default Dashboard