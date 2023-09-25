
// import {DashboardLinkProps} from "../components/sidebar/Sidebar"
import Sidebar from './sidebar/Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div className='flex '>
            <div className='' >
                <Sidebar />
            </div>
            <div className='w-screen'>
                <div className=''>

                    <Navbar text="Overview" />
                </div>
                <div className="" >
                    <Outlet />
                </div>
            </div>


        </div>
    )
}

export default Layout