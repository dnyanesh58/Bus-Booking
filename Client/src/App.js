import CustSignin from "./pages/CustSignin";
import CustSignup from "./pages/CustSignup";
import Home from "./pages/LandingPage";
import Search from "./pages/Search";
import Seat from "./pages/Booking/Seat";
import HomePage from "./pages/Homepage";
import TicketData from "./pages/TicketData";
import Payment from "./pages/Payment";
import Print from "./pages/Print";
import Cancel from "./pages/Cancel";
import Contact from "./pages/Contact/Contact";
import AdminSignup from "./pages/AdminSignup";
import AdminSignin from "./pages/AdminSignin";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Route, Routes, Link, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBus from "./pages/AddBus";
import AllBuses from "./pages/AllBuses";
import AllAvailableBuses from "./pages/AllAvailableBuses";
import UpdateBus from "./pages/UpdateBus";
import AllCustomers from "./pages/AllCustomers";

const AuthorizeUser = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus == "1" ? <CustSignin /> : <Home />;
  // if(loginStatus=='1'){
  //   return <home/>
  // }else{
  //   return <Signin/>
  // }
};
function App() {
  return (
    <div className="container">
      {" "}
      {/*container brings everything in the middle */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser />}></Route>
          <Route path="/CustSignin" element={<CustSignin />}></Route>
          <Route path="/CustSignup" element={<CustSignup />}></Route>
          <Route path="/AdminSignup" element={<AdminSignup />}></Route>
          <Route path="/AdminSignin" element={<AdminSignin />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Seat" element={<Seat />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/TicketData" element={<TicketData />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/Print" element={<Print />}></Route>
          <Route path="/Cancel" element={<Cancel />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/AddBus" element={<AddBus />}></Route>
          <Route path="/AllBuses" element={<AllBuses />}></Route>
          <Route
            path="/AllAvailablebuses"
            element={<AllAvailableBuses />}
          ></Route>
          <Route path="/UpdateBus" element={<UpdateBus />}></Route>
          <Route path="/AllCustomers" element={<AllCustomers />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
