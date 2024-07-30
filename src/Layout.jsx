import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../src/NavBar";
import Footer from "../src/Footer";

function Layout() {
  return (
    <div>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
export default Layout;