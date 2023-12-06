import { Link, Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <header className="cHeader">
                <h2>REACT STOCK</h2>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/stockItems"}>Items</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="cFooter">
                <p>Feito com React e React Router!</p>
            </footer>
        </>
    )
}