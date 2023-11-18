//import Footer from './Footer';
import NavigBar from './Navigbar';
import {Outlet} from "react-router-dom";
import Footer from './Footer';

function Layout() {
  return (
    <>
    <NavigBar/>
    <Outlet/>
    <Footer/>
 </>
  )
}

export default Layout