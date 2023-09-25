import { Icon } from "@iconify/react"
import Solid from "../../assets/Solid.svg"
import Icon1 from "../../assets/Outline.svg"
import Icon2 from "../../assets/Logout.svg"
export const DashBoardLinks = [
    {
        key: "overview",
        label: "OverView",
        path: "/dashboard",
        icon: <Icon icon="ic:baseline-dashboard" style={{}} />
    },
    {
        key: "user",
        label: "Users",
        path: "user",
        icon: <img src={Icon1} alt="" style={{ color: "white" }} />
    },
    {
        key: "admin",
        label: "Admins",
        path: "admins",
        icon: <img src={Solid} alt="" />
    },
    {
        key: "logout",
        label: "Logout",
        path: "logout",
        icon: <img src={Icon2} />
    }

]

