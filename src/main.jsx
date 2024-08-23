import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./index.jsx";
import Signin from "./pages/Signin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Atendimentos from "./pages/Atendimentos.jsx";
import Chat from "./pages/Chat.jsx";
import Logs from "./pages/Logs.jsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/atendimentos",
    element: <Atendimentos />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
