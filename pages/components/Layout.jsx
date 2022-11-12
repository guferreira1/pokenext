import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
        />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
