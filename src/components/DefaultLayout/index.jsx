import { Link } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <header className="cHeader">
                <h2>REACT STOCK</h2>
                <nav>
                    {/* mudar para <Link/> depois */}
                    <a href="">Home</a>
                    <a href="">Items</a>
                </nav>
            </header>

            <main>

            </main>

            <footer className="cFooter">
                <p>Feito com React e React Router!</p>
            </footer>
        </>
    )
}