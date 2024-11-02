import "./App.css";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./components/whatsAppButton";

function App() {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
