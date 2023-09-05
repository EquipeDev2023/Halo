import { useState } from "react"
import LeftSidebar from "./components/LeftSidebar";
import Topbar from "./components/Topbar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";
import GeneralConfigView from "./views/cofiguration/GeneralConfigView";
import UserConfigView from "./views/cofiguration/UserConfigView";
import PermissionConfigView from "./views/cofiguration/PermissionConfigView";
import UnitConfigView from "./views/cofiguration/UnitConfigView";
import ItemFamilyConfigView from "./views/cofiguration/ItemFamilyConfigView";
import PaymentConfigView from "./views/cofiguration/PaymentConfigView";
import CustomerView from "./views/customer/CustomerView";
import InvoiceCustomerView from "./views/customer/InvoiceCustomerView";
import SupplierView from "./views/supplier/SupplierView";
import InvoiceSupplierView from "./views/supplier/InvoiceSupplierView";
import PaymentSupplierView from "./views/supplier/PaymentSupplierView";
import ArticleView from "./views/article/ArticleView";
import OrderSaleView from "./views/sale/OrderSaleView";
import InvoiceSaleView from "./views/sale/InvoiceSaleView";
import DeliverySaleView from "./views/sale/DeliverySaleView";
import OrderPurchaseView from "./views/purchase/OrderPurchaseView";
import ReceptionPurchasseView from "./views/purchase/ReceptionPurchasseView";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<DashboardView/>}/>
				<Route path="client" element={<DashboardView/>}/>

				<Route path="customer">
					<Route index element={<CustomerView/>}/>
					<Route path="invoice" element={<InvoiceCustomerView/>}/>
					<Route path="payment" element={<PaymentConfigView/>}/>
				</Route>

				<Route path="supplier">
					<Route index element={<SupplierView/>}/>
					<Route path="invoice" element={<InvoiceSupplierView/>}/>
					<Route path="payment" element={<PaymentSupplierView/>}/>
				</Route>

				<Route path="article" element={<ArticleView/>}/>

				<Route path="sale">
					<Route index element={<OrderSaleView/>}/>
					<Route path="delivery" element={<DeliverySaleView/>}/>
					<Route path="invoice" element={<InvoiceSaleView/>}/>
				</Route>
				
				<Route path="purchase">
					<Route index element={<OrderPurchaseView/>}/>
					<Route path="delivery" element={<ReceptionPurchasseView/>}/>
					<Route path="invoice" element={<InvoiceSaleView/>}/>
				</Route>

				<Route path="configuration">
					<Route index element={<GeneralConfigView/>}/>
					<Route path="user" element={<UserConfigView/>}/>
					<Route path="permission" element={<PermissionConfigView/>}/>
					<Route path="unit" element={<UnitConfigView/>}/>
					<Route path="item-family" element={<ItemFamilyConfigView/>}/>
					<Route path="paiement" element={<PaymentConfigView/>}/>
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
