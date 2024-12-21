import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./core/public/signup";

// import Home from "./core/public/home"
const Home = lazy(() => import("./core/public/home"))

// import Login from "./core/public/login"
const Login = lazy(() => import("./core/public/login"))

// import Register from "./core/public/register"
const Register = lazy(() => import("./core/public/signup"))

// import Layout from "./core/private/layout"
const Layout = lazy(() => import("./core/private/layout"))



function App() {


  const publicRoutes = [
    { path: "/", element: <SignupPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "*", element: <>unauthorized</> }
  ]

  const privateRoutes = [
    { path: "/admin", element: <Layout /> },
    { path: "*", element: <>Page not found</> }
  ]

  // LOGIN logic TODO
  const isAdmin = false;
  const routes = isAdmin ? privateRoutes : publicRoutes
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  )
}

export default App
