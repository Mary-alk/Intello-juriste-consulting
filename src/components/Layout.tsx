import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
