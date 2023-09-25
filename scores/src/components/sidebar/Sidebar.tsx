

import { Link, useLocation } from 'react-router-dom'
import classNames from "classnames"
import { DashBoardLinks } from './Index'
import logo from "../../assets/logo.svg"
export interface DashboardLinkProps {
  link: {
    key: string
    label: string
    path: string
    icon: React.ReactNode
  }
}
const linkClass = "flex items-center gap-2 font-light px-3 py-2 hover:text-white hover:bg-cyan hover:no-underline active:bg-cyan rounded-md text-base"

const SidebarDasbBoardLink = ({ link }: DashboardLinkProps) => {
  const { pathname } = useLocation()

  return (

    <Link
      to={link.path}
      className={classNames(linkClass, {
        "bg-[#51FFFF] text-black  ": pathname === link.path,
        "text-white": pathname !== link.path,

      })}

    >
      <span className='flex justify-between items-center gap-8'>
        {link.icon}
        {link.label}

      </span>

    </Link>

  )
}
const Sidebar = () => {
  return (
    <div className='bg-cyan md:w-[243px] h-screen w-full px-10 '>

      <div className=' pt-[45px] '>
        <img src={logo} alt="" />
      </div>
      <div className='h-0 w-full border bg-[#DFDFDF] my-[32px]'></div>
      {DashBoardLinks.map((link) => (
        <SidebarDasbBoardLink key={link.key} link={link} />
      ))}

    </div>
  )
}

export default Sidebar