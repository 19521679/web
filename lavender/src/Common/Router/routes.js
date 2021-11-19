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
import SuplierDashboard from "../../Components/Admin/SuplierDashboard";
import LMember from "../../Components/Accounts/LMember.js";
import ThongTinTaiKhoan from "../../Components/Accounts/ThongTinTaiKhoan";
import ThongBaoCuaToi from "../../Components/Accounts/ThongBaoCuaToi";
import QuanLyDonHang from "../../Components/Accounts/QuanLyDonHang";
import SoDiaChi from "../../Components/Accounts/SoDiaChi";
import SanPhamYeuThich from "../../Components/Accounts/SanPhamYeuThich";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },
  {
    path: "/:loai/:hang/:dong/:sanpham",
    exact: false,
    main: ({ match }) => <Product match={match}></Product>,
  },
  {
    path: "/mobile",
    exact: true,
    main: () => <Mobile></Mobile>,
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
    path: "/lmember/thongtintaikhoan",
    exact: true,
    main: () => <ThongTinTaiKhoan></ThongTinTaiKhoan>
  },
  {
    path: "/lmember/quanlydonhang",
    exact: true,
    main: () => <QuanLyDonHang></QuanLyDonHang>
  },
  {
    path: "/lmember/thongbaocuatoi",
    exact: true,
    main: () => <ThongBaoCuaToi></ThongBaoCuaToi>
  },
  {
    path: "/lmember/sodiachi",
    exact: true,
    main: () => <SoDiaChi></SoDiaChi>
  },
  {
    path: "/lmember/sanphamyeuthich",
    exact: true,
    main: () => <SanPhamYeuThich></SanPhamYeuThich>
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
