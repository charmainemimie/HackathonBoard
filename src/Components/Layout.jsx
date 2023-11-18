//import Footer from './Footer';
import NavigBar from './Navigbar';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
    <NavigBar />
    <Outlet />
 </>
  )
}

export default Layout