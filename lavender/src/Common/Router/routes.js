import Home from "../../Components/Home.js";
import NotFoundPage from "./NotFoundPage.js";
import Mobile from "../../Components/Mobile";
import Computer from "../../Components/Computer";
import ExDevice from "../../Components/ExDevice";
import Blog from "../../Components/Blog";
import Cart from "../../Components/Cart";
import Login from "../../Components/Accounts/Login.js";
import Register from "../../Components/Accounts/Register.js";
import Product from "../../Components/Product";
import Admin from "../../Components/Admin";
import Guarantee from "../../Components/Guarantee";
import ProductDashboard from "../../Components/Admin/ProductDashboard";
import CustomerDashboard from "../../Components/Admin/CustomerDashboard";
import BillingDashboard from "../../Components/Admin/BillingDashboard";
import StaffDashboard from "../../Components/Admin/StaffDashboard";
import StaffAccountDashboard from "../../Components/Admin/StaffAccountDashboard";
import SuplierDashboard from "../../Components/Admin/SuplierDashboard";
import PromotionDashboard from "../../Components/Admin/PromotionDashboard";
import CustomerAccountDashboard from "../../Components/Admin/CustomerAccountDashboard"
import ProductTypeDashboard from "../../Components/Admin/ProductTypeDashboard"
import GuaranteeDashboard from "../../Components/Admin/GuaranteeDashboard"
import TrademarkDashboard from "../../Components/Admin/TrademarkDashboard"

import LMember from "../../Components/Accounts/LMember.js";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },
  {
    path: "/:loai/:hang/:dong/:sanpham",
    exact: true,
    main: ({ match }) => <Product match={match}></Product>,
  },
  {
    path: "/mobile/:trademark",
    exact: false,
    main: ({match}) => <Mobile match={match} ></Mobile>,
  },
  {
    path: "/mobile",
    exact: false,
    main: () => <Mobile ></Mobile>,
  },

  {
    path: "/computer",
    exact: false,
    main: () => <Computer></Computer>,
  },
  {
    path: "/exdevice",
    exact: false,
    main: () => <ExDevice></ExDevice>,
  },
  {
    path: "/blog",
    exact: false,
    main: () => <Blog></Blog>,
  },
  {
    path: "/cart",
    exact: false,
    main: () => <Cart></Cart>,
  },
  {
    path: "/guarantee",
    exact: false,
    main: () => <Guarantee></Guarantee>
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login></Login>,
  },
  {
    path: "/register",
    exact: false,
    main: () => <Register></Register>,
  },
  {
    path: "/mobile/:productname/product",
    exact: false,
    main: ({ match }) => <Product match={match}></Product>,
  },
  {
    path: "/admin/overview",
    exact: true,
    main: () => <Admin></Admin>,
  },
  {
    path: "/admin/product",
    exact: true,
    main: () => <ProductDashboard></ProductDashboard>
  },
  {
    path: "/admin/customer",
    exact: true,
    main: () => <CustomerDashboard></CustomerDashboard>,
  },
  {
    path: "/admin/staff",
    exact: true,
    main: () => <StaffDashboard></StaffDashboard>
  },
  {
    path: "/admin/billing",
    exact: true,
    main: () => <BillingDashboard></BillingDashboard>
  },
  {
    path: "/admin/suplier",
    exact: true,
    main: () => <SuplierDashboard></SuplierDashboard>
  },
  {
    path: "/admin/staffaccount",
    exact: true,
    main: () => <StaffAccountDashboard></StaffAccountDashboard>
  },
  {
    path: "/admin/promotion",
    exact: true,
    main: () => <PromotionDashboard></PromotionDashboard>
  },
  {
    path: "/admin/customeraccount",
    exact: true,
    main: () => <CustomerAccountDashboard></CustomerAccountDashboard>
  },
  {
    path: "/admin/producttype",
    exact: true,
    main: () => <ProductTypeDashboard></ProductTypeDashboard>
  },
  {
    path: "/admin/guarantee",
    exact: true,
    main: () => <GuaranteeDashboard></GuaranteeDashboard>
  },
  {
    path: "/admin/trademark",
    exact: true,
    main: () => <TrademarkDashboard></TrademarkDashboard>
  },
  {
    path: "/lmember",
    exact: true,
    main: () => <LMember></LMember>
  },
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage></NotFoundPage>,
  },
];
export default routes;
