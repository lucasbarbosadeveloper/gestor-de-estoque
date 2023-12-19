import { Link, Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <header className="cHeader">
                <h2>REACT STOCK</h2>
                <nav>
                    <div className="navBar">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/stockItems"}>Items</Link>
                    </div>
                </nav>

                <div className="navDrop dropdown">
                    <button className="btn btn-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-list text-light "></i>
                    </button>
                    <ul className="dropdown-menu bg-dark">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/stockItems"}>Items</Link></li>
                    </ul>
                </div>
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