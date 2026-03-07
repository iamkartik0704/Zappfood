import React, { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const placeorder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">
                Delivery Information
            </p>
            <div className="multi-fields">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <input type="text" placeholder='Phone number'/>
            <input type="email" placeholder='email address'/>
            <input type="text" placeholder='Address'/>
            <div className="multi-fields">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Pin Code'/>  
            </div>
        </div>
        <div className="place-order-right">
            <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>SubTotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount()===0?0:49}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+49}</b>
                </div>
            </div>
                <button>Proceed To Payment</button>
        </div>
        </div>
      
    </form>
  )
}

export default placeorder
