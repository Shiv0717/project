import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/MainLayout";
import Announcements from "./pages/Announcements";
import Members from "./pages/Members";
import Pets from "./pages/Pets";
import Documents from "./pages/Documents";
import CreatePost from "./pages/CreatePost";
import AnnouncementDetails from "./pages/AnnouncementDetails";
import Login from "./pages/Login";

const router = createBrowserRouter([
  // Login route (outside layout)
  { path: "login", element: <Login /> },

  // Main layout
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "posts", element: <Announcements /> },
      { path: "create-post", element: <CreatePost /> },
      { path: "announcement/:id", element: <AnnouncementDetails /> }, // FIXED
      { path: "members", element: <Members /> },
      { path: "pets", element: <Pets /> },
      { path: "pets/domestic", element: <Pets /> },
      { path: "pets/wildlife", element: <Pets /> },
      { path: "documents", element: <Documents /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
