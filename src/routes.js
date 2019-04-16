import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import NewPlaylist from "./views/NewPlaylist";
import UserProfile from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import Playlists from "./views/Playlists";
import Users from "./views/Users";
import NewUser from "./views/NewUser";
import EditUser from "./views/EditUser";
import Images from "./views/Images";
import NewImage from "./views/NewImage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/edit-user",
    layout: DefaultLayout,
    component: EditUser
  },
  {
    path: "/images",
    layout: DefaultLayout,
    component: Images
  },
  {
    path: "/newImage",
    layout: DefaultLayout,
    component: NewImage
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/settings",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/playlists",
    layout: DefaultLayout,
    component: Playlists
  },
  {
    path: "/new-playlist",
    layout: DefaultLayout,
    component: NewPlaylist
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/new-user",
    layout: DefaultLayout,
    component: NewUser
  }
];
