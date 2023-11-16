import CartIcon from '/images/cart_icon.png'

function CartWidget({Cart}) {
    return (
        <div className="nav-item" id="seeCart">
            <a className="nav-link" href="./pages/shopping-cart.html"><img className="navbar-cart" 
                src={CartIcon} alt="" />                
            </a>
            <div>
                <span>3</span>
            </div>
        </div>
    )
}


export default CartWidget
