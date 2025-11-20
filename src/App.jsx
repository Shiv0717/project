import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import Members from "./pages/Members";

import Pets from "./pages/Pets";
import Documents from "./pages/Documents";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Announcements
      { path: "posts", element: <Announcements /> },
      // Members
      { path: "members", element: <Members /> },
      // ---------------- PETS ROUTES ----------------
      { path: "pets", element: <Pets /> },
      { path: "pets/domestic", element:  <Pets /> },
      { path: "pets/wildlife", element:  <Pets />},
      { path: "documents", element: <Documents/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
