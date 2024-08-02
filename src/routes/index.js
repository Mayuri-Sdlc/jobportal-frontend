import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import Home from "../pages/home";
// import Login from "../components/signup/login";
import Login from "../components/signup/login";
import Signup from "../components/signup/signup";
import CreatePassword from "../components/signup/createPassword";
import VerifyOTP from "../components/signup/verifyOTP";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/Newsletter/Newsletter";
import Contact from "../pages/Contactus";
// import Banner from "../components/Banner/Banner"
import PageNotFound from "../pages/pageNotFound";
import Popup from "../components/Address/Popup"
import PaymentSuccess from "../pages/success";
import EditProfile from "../components/profile/EditProfile";
import EditAddress from "../components/profile/EditAddress";
import UpdateProfile from "../components/profile/UpdateProfile";

import Contactus from "../pages/Contactus";
import Faq from "../pages/Faq";
import AuthListener from "../utilities/authListener";
import CodSuccessPage from "../pages/CodSuccessPage";
import EmailSubscribeSuccess from "../pages/EmailSubscribeSuccess";
import ChangePassword from "../components/profile/ChangePassword";
import PaymentCancel from "../pages/PaymentCancel";
import SiteLayout from "../components/SiteLayout/SiteLayout";


export const publicPages = [
	{ path: "/", exact: true, component: Home },
	{ path: "/login", exact: true, component: Login },
	{ path: "/change-password", exact: true, component: ChangePassword },
	{ path: "/signup", exact: true, component: Signup },
	{ path: "/createpassword", exact: true, component: CreatePassword },
	{ path: "/VerifyOTP", exact: true, component: VerifyOTP },
	{ path: "/news", exact: true, component: News },
	{ path: "/contact-us", exact: true, component: Contact },
	{ path: "/faqs", exact: true, component: Faq },
	// { path: "/ban", exact: true, component: Banner },
	{ path: "/address", exact: true, component: Popup },
	{ path: "/success", exact: true, component: PaymentSuccess },
	{ path: "/cancel", exact: true, component: PaymentCancel },
	{ path: "/cod-success-page/:id", exact: true, component: CodSuccessPage },
	{ path: "/overview", exact: true, component: CodSuccessPage },


	{ path: "/updateprofile", exact: true, component: UpdateProfile },
	{ path: "/editaddres", exact: true, component: EditAddress },
	{ path: "/email-subscribe/:id", exact: true, component: EmailSubscribeSuccess }

];
export const withoutfooterandNavbar = [
	{ path: "/login", exact: true, component: Login },
	{ path: "/signup", exact: true, component: Signup },
	{ path: "/createPassword", exact: true, component: CreatePassword },
	{ path: "/VerifyOTP", exact: true, component: VerifyOTP },
	{ path: "/email-subscribe/:id", exact: true, component: EmailSubscribeSuccess }

];


const SiteRoutes = () => {
	return (
		<BrowserRouter basename="/">
			{/* <AuthListener> */}
			<Suspense
				fallback={
					<div
						style={{
							display: "flex",
							height: "100vh",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{/* <Spinner animation="border" style={{ color: "black", marginTop: 5 }} role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner> */}
					</div>
				}
			>

				<Routes>
					{publicPages.map((route, idx) => (
						<Route element={<SiteLayout />}>
							<Route
								key={idx}
								path={`${route?.path}`}
								element={
									withoutfooterandNavbar.find((item) => item.path === route?.path) ? (
										<route.component />
									) : (
										<div className="min-h-screen  w-full">
											{/* <Navbar /> */}
											<div className="flex-grow">
												<route.component />
											</div>
											{/* <Footer /> */}
										</div>
									)
								}
							/>
						</Route>
					))}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
			{/* </AuthListener> */}
		</BrowserRouter>
	);
};

export default SiteRoutes;
