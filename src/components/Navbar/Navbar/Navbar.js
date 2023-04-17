import CartWidget from "../../CartWidget/CartWidget"
const Navbar = () =>  {
    return (
        <nav>
            <h3>Tienda Elias</h3>
            <div>
                <button> Ropa</button>
                <button>Zapatillas</button>
                <buttom> Skateboarding</buttom>
            </div>
            <CartWidget />
        </nav>

    )
}
export default Navbar 