import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Javascript from "./pages/javascript";
// Level 2 Organize theme Mode
import {useContext } from "react";
import ThemeContext from "./context/ThemeContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },
  {
    path: "/signin",
    element: <Signin />,
  },


  {
    path: "/signup",
    element: <Signup />,
  },

  {

    
    path: "/html",
    element: <HTML />,
  },


  {
    path: "/javascript",
    element: <Javascript />,
  },


]);

function App() {
  const {theme} = useContext(ThemeContext);
  return(
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  )  
}

export default App;
