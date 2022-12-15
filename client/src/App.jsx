import Login from "./pages/login/Login";
import Register from "./pages/register/Ragester";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/Leftbar";
import RightBar from "./components/rightBar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import "./App.css";

function App() {

  const currentUser = true

  const Layout = () => {
    return (
      <div >
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div >
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <ProtectedRoute>
             <Layout />
       </ProtectedRoute>
     
     
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
