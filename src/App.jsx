import { Outlet } from "react-router-dom";

import { Navbar, Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
