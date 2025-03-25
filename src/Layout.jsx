import React from "react";
import { Outlet } from "react-router";
import Header from "./global/Header";
import Footer from "./global/Footer";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;