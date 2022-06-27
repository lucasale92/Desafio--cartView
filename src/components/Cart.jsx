import React from 'react'
import { useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';


const Cart = () => {
  const {cart, getItemPrice, emptyCart, deleteItem } = useContext(CartContext)
  
  return (
    <>
 <section className='container'>
                <h2 className='text-center py-5 main-title'>Carrito de compras</h2>
                {cart.length > 0 &&
                    <div className='text-center d-flex justify-content-center align-items-center'>
                        <div className='row container justify-content-center align-items-center'>
                            <div className='col-2'></div>
                            <div className='col-4 text-start'>
                                <p className='h6'>PRODUCTOS</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>CANTIDAD</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>PRECIO</p>
                            </div>
                            <div className='col-2 text-center'>
                                <p className='h6'>TOTAL</p>
                            </div>
                        </div>
                    </div>
                }
                {cart.map((item, index) => (
                    <>
                        <div key={index} className='text-center d-flex justify-content-center align-items-center py-3 item-cart'>
                            <div className='row container justify-content-center align-items-center cart-container'>
                                <div className='col-6 d-flex'>
                                    <div className='row d-flex'>
                                       
                                        <div className='col-8 d-flex flex-column align-items-center justify-content-center'>
                                            <p className='text-center cart-title'>{item.name}</p>
                                            <p onClick={() => deleteItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> Eliminar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>{item.qty}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>${item.price}</p>
                                </div>
                                <div className='col-2'>
                                    <p className='text-center fw-bold'>${item.qty * item.price}</p>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </section>

        {cart.length > 0 ?
            <div className='text-center py-5'>
                <button className='btn btn-secondary' onClick={emptyCart}>Vaciar carrito</button>
                <p className='text-center'>PRECIO TOTAL ${getItemPrice()}</p>
                <Link to ={"/checkout"}><Button variant="success" size="lg">Finalizar compra</Button></Link>
            </div> :
            <div className='text-center'>
                <p>NO HAY PRODUCTOS</p>
                <Link to ={"/"}><Button variant="success" size="m mb-2">Volver a la tienda</Button></Link>
                
            </div>
        }

    </>
)
}

export default Cart