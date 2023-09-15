import { useState } from "react"
import LeftSidebar from "./components/LeftSidebar";
import Topbar from "./components/Topbar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";


import { PartnerForm, PartnerInfo, PartnerList } from "./views/partner/PartnerView";
import { ArticleForm, ArticleInfo, ArticleList } from "./views/article/ArticleView";
import DashboardView from "./views/DashboardView";
import { InvoiceForm, InvoiceInfo, InvoiceList } from "./views/invoice/InvoiceView";
import { OrderForm, OrderInfo, OrderList } from "./views/order/OrderView";
import { ItemCategoryForm, ItemCategoryInfo, ItemCategoryList } from "./views/itemCategory/ItemCategoryView";
import { PaymentForm, PaymentInfo, PaymentList } from "./views/payment/PaymentView";
import { PaymentModeForm, PaymentModeInfo, PaymentModeList } from "./views/paymentMode/PaymentModeView";
import { UnitForm, UnitInfo, UnitList } from "./views/unit/UnitView";
import { ShipmentForm, ShipmentInfo, ShipmentList } from "./views/shipment/ShipmentView";
import { UserForm, UserInfo, UserList } from "./views/user/UserView";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardView/>}/>

				<Route path="partner">
					<Route index element={<PartnerList/>}/>
					<Route path="add" element={<PartnerForm/>}/>
					<Route path=":id" element={<PartnerInfo/>}/>
					<Route path="edit/:id" element={<PartnerForm/>}/>
				</Route>

				<Route path="article">
					<Route index element={<ArticleList/>}/>
					<Route path="add" element={<ArticleForm/>}/>
					<Route path=":id" element={<ArticleInfo/>}/>
					<Route path="edit/:id" element={<ArticleForm/>}/>
				</Route>

				<Route path="order">
					<Route index element={<OrderList/>}/>
					<Route path="add" element={<OrderForm/>}/>
					<Route path="edit/:id" element={<OrderForm/>}/>
					<Route path=":id" element={<OrderInfo/>}/>
				</Route>

				<Route path="shipment">
					<Route index element={<ShipmentList/>}/>
					<Route path="edit/:id" element={<ShipmentForm/>}/>
					<Route path=":id" element={<ShipmentInfo/>}/>
				</Route>

				<Route path="invoice">
					<Route index element={<InvoiceList/>}/>
					<Route path="edit/:id" element={<InvoiceForm/>}/>
					<Route path=":id" element={<InvoiceInfo/>}/>
				</Route>

				<Route path="payment">
					<Route index element={<PaymentList/>}/>
					<Route path="edit/:id" element={<PaymentForm/>}/>
					<Route path=":id" element={<PaymentInfo/>}/>
				</Route>

				<Route path="mouvement" element={<InvoiceForm/>}/>

				<Route path="approvisionnement" element={<InvoiceForm/>}/>

				<Route path="inventory">
					<Route index element={<InvoiceList/>}/>
					<Route path="edit/:id" element={<InvoiceForm/>}/>
					<Route path=":id" element={<InvoiceInfo/>}/>
				</Route>

				<Route path="user">
					<Route index element={<UserList/>}/>
					<Route path="add" element={<UserForm/>}/>
					<Route path="edit/:id" element={<UserForm/>}/>
					<Route path=":id" element={<UserInfo/>}/>
				</Route>

				<Route path="unit">
					<Route index element={<UnitList/>}/>
					
					<Route path="add" element={<UnitForm/>}/>
					<Route path="edit/:id" element={<UnitForm/>}/>
					<Route path=":id" element={<UnitInfo/>}/>
				</Route>

				<Route path="itemCategory">
					<Route index element={<ItemCategoryList/>}/>
					<Route path="add" element={<ItemCategoryForm/>}/>
					<Route path="edit/:id" element={<ItemCategoryForm/>}/>
					<Route path=":id" element={<ItemCategoryInfo/>}/>
				</Route>

				<Route path="paymentMode">
					<Route index element={<PaymentModeList/>}/>
					<Route path="add" element={<PaymentModeForm/>}/>
					<Route path="edit/:id" element={<PaymentModeForm/>}/>
					<Route path=":id" element={<PaymentModeInfo/>}/>
				</Route>

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
