import React from 'react'
import "./cartSection.component.css";


function Cart() {
  return (
    <div className="d-flex " id='cartwrapper'>
      <div className="container" id='cart-items'>
        <h1 id='item'>card</h1>
        <h1 id='item'>card</h1>
        <h1 id='item'>card</h1>
        <h1 id='item'>card</h1>
      </div>

      <div className="container" id="buy-options">
        <h2>Summary</h2> <hr/>
        <h3>Promo Code</h3>
        <div className="container" id="coupon-code">
          <input type='text' placeholder='Enter Coupon Code!'/>
          <button>APPLY</button>
        </div>

        <div className="container" id="order-info">
          <h4>Total items: <b>2</b></h4>
          <h4>SubTotal: <b>$200.53</b></h4>
          <h4>Shipping Charges: <b> $2.64</b></h4>
        </div>

        <button id='buy-now'>Buy Now</button>
      </div>
    </div>
  )
}

export default Cart