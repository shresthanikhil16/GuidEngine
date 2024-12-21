import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./core/public/dashboard";
import SignupPage from "./core/public/signup";

// import SignupPage directly as it's already being used.

const Dashboard = lazy(() => import("./core/public/dashboard"));
const Login = lazy(() => import("./core/public/login"));
const Register = lazy(() => import("./core/public/signup"));
const Layout = lazy(() => import("./core/private/layout"));

function App() {
  const publicRoutes = [
    { path: "/", element: <DashboardPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "*", element: <>unauthorized</> },
  ];

  const privateRoutes = [
    { path: "/admin", element: <Layout /> },
    { path: "*", element: <>Page not found</> },
  ];

  // LOGIN logic TODO
  const isAdmin = false;
  const routes = isAdmin ? privateRoutes : publicRoutes;
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}

export default App;
