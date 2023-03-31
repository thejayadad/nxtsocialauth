
import Footer from "./Footer"
import Navbar from "./Navbar"


export default function Layout({children}){
    return (
        <>
        <main className="max-w-4xl m-auto bg-white	p-10 rounded-lg mt-5 shadow-slate-50">
        <Navbar />

            {children}
            <Footer />
        </main>
        </>
    )
}