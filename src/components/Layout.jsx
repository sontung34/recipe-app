import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <div className="mx-auto">
            <Header/>
            <main className="mx-auto max-w-7xl">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}