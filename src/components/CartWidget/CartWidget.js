import CartWidget from './CartWidget.css'

const cartWidget = () => {
    return (
        <button>
            <img src={'./images/carrito.svg'} alt='cart-widget' className='cartLogo'></img>
            <h3>0</h3>
        </button>
    )
}

export default cartWidget