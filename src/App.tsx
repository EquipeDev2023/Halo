import { useState } from "react"
import LeftSidebar from "./components/LeftSidebar";
import Topbar from "./components/Topbar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardView/>}/>
				<Route path="client" element={<DashboardView/>}/>
			</Route>
			<Route path="login" element={<LoginView />}>
			</Route>
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export function Layout() {
	const [collapsed, setCollapsed] = useState(false)
	const toggleSidebar = () => {
		setCollapsed(!collapsed)
	}

	return (
		<>
			<Topbar toggleSidebar={toggleSidebar} collapsed={collapsed} />

			<div className="App">

				<LeftSidebar collapsed={collapsed} />

				<main className="content">

					<Outlet />

				</main>

			</div>
		</>
	)
}

export function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the Dashboard</Link>
			</p>
		</div>
	)
}

export default App
