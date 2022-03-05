import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { IndItem } from '../Components/IndItem';
import { Loading } from '../Components/Loading';
import { CartContext } from '../Contexts/CartProvider';
import "../CSS/Cart.css"

export const Cart = () => {
  useEffect(() => {
    getCartData();
  }, [])
  
  const {getCount} = useContext(CartContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState([])
  const [removeId, setRemoveId] = useState(null)
  const [open, setOpen] = useState(false)

  const getCartData = () => {
    setIsLoading(true);
    try {
        fetch("https://meesho-db.herokuapp.com/cart")
        .then((res) => res.json())
        .then((data) => {
          setCart(data)
          setIsLoading(false)
        })
        .catch(console.log);
    } catch (error) {
        console.log(error)
        setIsLoading(false);
    }
}

const handleDelete = (id) => {
  setIsLoading(true);
  console.log(id)
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
    try {
        fetch(`https://meesho-db.herokuapp.com/cart/${id}`,{
          method: "DELETE",
          headers: {
              "content-type": "application/json",
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          getCount()
          setIsLoading(false)
        })
        .catch(console.log);
    } catch (error) {
        console.log(error)
        setIsLoading(false);
    }
}

const increment = (item) => {
let data = {
  ...item,
  quantity: item.quantity + 1
}
console.log(data);
setIsLoading(true)
fetch(`https://meesho-db.herokuapp.com/cart/${item.id}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(data),
}).then((r) => {
  console.log(r)
  r.json();
  setIsLoading(false)
  getCartData();
}
).then((d) => {
  console.log(d)
})
}

const decrement = (item) => {
console.log(item.quantity)
if(item.quantity === 1){
    setOpen(true)
    setRemoveId(item.id)
}
else{
let data = {
  ...item,
  quantity: item.quantity - 1
}
console.log(data);
setIsLoading(true)
fetch(`https://meesho-db.herokuapp.com/cart/${item.id}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(data),
}).then((r) => {
  console.log(r)
  r.json();
  setIsLoading(false)
  getCartData();
}
).then((d) => {
  console.log(d)
})
}
}
 
const handleClose = () => {
    setOpen(false)
}

console.log(cart)
let charges = 0;
let totalCharges = 0;
let discount = 0;
let deliveryCharge = 0;
  if(cart.length !== 0){
    cart.map(item => {
      charges += (item.discounted_price * item.quantity);
      totalCharges += (item.original_price * item.quantity);
    })
    discount = totalCharges - charges;
    if(totalCharges < 500){
      deliveryCharge = 40;
    }
  }
console.log(charges)

  if(isLoading) return <Loading/>
  return (
    <>
    {
          cart.length === 0 ?
             <div className='emptyCartContainer'>
              <img src="https://meesho.com/assets/Checkout/empty-cart.png" alt="" />
              <p>Your cart is empty</p>
              <div className='viewProductsBtn' onClick={() => navigate("/")}>
                  <p>View Products</p>
              </div>
          </div>
          :
          <div className='cartContainer'>
            <div className='itemDetails'>
            <div className='itemDetailsTitleView'>
              <p className='itemDetailsTitle'>Cart</p>
              <div className="dash"/>
              <p className='itemCount'>{cart.length} Item</p>
            </div>
            <div className='cartList'>
                {
                  cart.map((item) => {
                    return(
                      <IndItem key={item.id} item={item} handleDelete={handleDelete} 
                      increment={increment} decrement={decrement} removeId={removeId}
                      open={open} setOpen={setOpen} handleClose={handleClose}/>
                    )
                  })
                }
              </div>
            </div>
            <div className='priceDetails'>
              <div className='priceView'>
               <p className='mainPriceTitle'>Product Details</p>
               </div>
              <div className='priceView'>
               <p className='mainPrice'>Product Charges</p>
               <p className='charge'>{totalCharges}</p>
               </div>
               <div className='priceView'>
               <p className='deliCharges'>Delivery Charges</p>
               <p className="charge">+{deliveryCharge}</p>
               </div>
               <div className='priceView'>
               <p className='codCharges'>COD Charges</p>
               <p className="charge">0</p>
               </div>
               <div className='priceView'>
               <p className='discount'>1st Order Discount</p>
               <p className="charge">-{discount}</p>
               </div>
               <div className="priceDivider"/>
               <div className='priceView'>
               <p className='total'>Order Total</p>
               <p className="totalCharge">{totalCharges + deliveryCharge - discount}</p>
               </div>
            <div className='continueBtn'>
              <p>Continue</p>
            </div>
            </div>
          </div>
        }
  </>
  )
}
