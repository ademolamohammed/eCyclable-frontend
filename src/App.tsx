import React, { lazy, Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";

import { Counter } from "./features/counter/Counter";
import "./App.css";

// import HomeLayout from "./component/HomeLayout";
// import CreateAccount from "./pages/customer/auth/create";
// import { LandingPage, VendorHomepage } from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  createBrowserRouter,
} from "react-router-dom";
// import PersonalProfileContainer from "./pages/customer/personalProfile";
// import Categories from "./pages/customer/category";
// import CartItem from "./pages/customer/cartItem/Cart";
// import ItemDetails from "./pages/customer/itemDetails";
// import Checkout from "./pages/customer/checkout/Checkout";
// import ProductContainer from "./pages/patner/accountProfile";
// import ProtectedeRoutes from "./utils/ProtectedRoutes";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import LandingPage from "./pages/landingPage/LandingPage";
import HomeLayout from "./component/HomeLayout";
import Header from "./component/element/header/header";
import Service from "./pages/services/services";
import Auth from "./pages/auth/auth";
import Otp from "./pages/auth/Otp";
import AccountInfo from "./pages/personalProfile/account/accountInfo";
import BookingMain from "./pages/bookings/booking";

// import ProductContainer from "./pages/patner/accountprofile";
// import PersonalProfileContainer from "./pages/customer/personalProfile";
// import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<p> Loading ... </p>}>
//         <HomeLayout>
//           <Route path="home" element={<LandingPage />}>
//             <Route path="project/:projectId" element={<LandingPage />}>
//               <Route path=":taskId" element={<LandingPage />} />
//             </Route>
//           </Route>
//         </HomeLayout>
//       </Suspense>
//     </div>
//   );
export const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <LandingPage />
      </HomeLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <HomeLayout>
        <Service />
      </HomeLayout>
    ),
  },
  {
    path: "/auth",
    element: (
      <HomeLayout>
        <Auth />
      </HomeLayout>
    ),
  },
  {
    path: "/otp",
    element: (
      <HomeLayout>
        <Otp />
      </HomeLayout>
    ),
  },
  {
    path: "/dashboard/account",
    element: (
      <HomeLayout>
        <AccountInfo />
      </HomeLayout>
    ),
  },
  {
    path: "/dashboard/finance",
    element: (
      <HomeLayout>
        <AccountInfo />
      </HomeLayout>
    ),
  },
  {
    path: "/dashboard/history",
    element: (
      <HomeLayout>
        <AccountInfo />
      </HomeLayout>
    ),
  },
  {
    path: "/dashboard/messaging",
    element: (
      <HomeLayout>
        <AccountInfo />
      </HomeLayout>
    ),
  },
  {
    path: "/bookings",
    element: (
      <HomeLayout>
        <BookingMain />
      </HomeLayout>
    ),
  },
  
]);


// }

// export default App;
