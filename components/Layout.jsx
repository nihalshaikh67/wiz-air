import React from "react";
import Head from "next/head";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Wiz Air Cargo</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
    </div>
  );
}
