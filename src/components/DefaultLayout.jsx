import { Link } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div>REACT STOCK</div>
                <nav>
                    {/* mudar para <Link/> depois */}
                    <a href="">Home</a>
                    <a href="">Items</a>
                </nav>
            </header>

            <main>

            </main>

            <footer>
                <p>Feito com React e React Router!</p>
            </footer>
        </>
    )
}