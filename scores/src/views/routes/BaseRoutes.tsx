import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollUp from "../../components/common/ScrollUp";
import Home from "../pages/Home";
import Signup from "../../components/Signup";
import Login from "../../components/Login"
import Overview from "../pages/Dashboard"
import User from "../pages/User"
import Layout from "../../components/Layout";
import Admin from "../pages/Admin"
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound"
export const BaseRoute: React.FC = () => {
	return (
		<BrowserRouter>
			<ScrollUp>
				<Routes>
					<Route index element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Layout />}>
						<Route path="" element={<Overview />} />
						<Route path="user" element={<User />} />
						<Route path="admins" element={< Admin />} />
						<Route path="logout" element={<Logout/>} />
					</Route>

					<Route path="/home" element={<Home />}>


					</Route>

					<Route path="*" element={<NotFound/>} />
				</Routes>

			</ScrollUp>
		</BrowserRouter>
	);
};