import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./core/public/forgetPassword";
import GetStarted from "./core/public/gettingstarted";
import ResetPasswordPage from "./core/public/resetPassword";
import SignupPage from "./core/public/signup";

// Lazy-load all components
const DashboardPage = lazy(() => import("./core/public/dashboard"));
const AdminDashboardPage = lazy(() => import("./core/public/admindashboard"));
const WelcomePage = lazy(() => import("./core/public/welcomepage"));
const Login = lazy(() => import("./core/public/login"));
const Register = lazy(() => import("./core/public/signup"));
const Layout = lazy(() => import("./core/private/layout"));

function App() {
  const publicRoutes = [
    { path: "/", element: <GetStarted /> },
    { path: "/welcomepage", element: <WelcomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/dashboard", element: <DashboardPage /> },
    { path: "/admindashboard", element: <AdminDashboardPage /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/resetpassword", element: <ResetPasswordPage /> },
    { path: "*", element: <>Unauthorized</> },
  ];

  const privateRoutes = [
    { path: "/admin", element: <Layout /> },
    { path: "*", element: <>Page not found</> },
  ];

  // LOGIN logic TODO
  const isAdmin = false; // Replace with actual logic for admin status
  const routes = isAdmin ? privateRoutes : publicRoutes;

  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}

export default App;
