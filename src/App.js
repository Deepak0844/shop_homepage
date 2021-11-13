import './App.css';
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState} from "react";

export default function App(){
  const [cart, setCart] = useState([])

  //product list
    const shoppingProducts =[
    {
      brand:"Nike",
      name:"Men's Air Max Excee Running Shoes",
      image:"https://m.media-amazon.com/images/I/81Wt+uytSLL._AC_UL320_.jpg",
      price:"3,336",
      id: 1,
      cart: false,
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"Men's Renew Ride Running Shoes",
      image:"https://m.media-amazon.com/images/I/61iK-U9enSL._AC_UL320_.jpg",
      price:"2,217",
      id: 2,
      cart: false,
      rating:4,
    },
    {
      brand:"Nike",
      name:"Women's Flex Fury 2 Running Shoes",
      image:"https://m.media-amazon.com/images/I/719GdOZCGAL._AC_UL320_.jpg",
      price:"3,305",
      id: 3,
      cart: false,
      rating:4.3,
    },
    {
      brand:"Nike",
      name:"mens Nike Todos Running Shoes",
      image:"https://m.media-amazon.com/images/I/71YWn0X2NQL._AC_UL320_.jpg",
      price:"3,355",
      id: 4,
      cart: false,
      rating:4.25,
    },
    {
      brand:"Nike",
      name:"Men Downshifter 8 Running Shoes",
      image:"https://m.media-amazon.com/images/I/61HGV9gCslL._AC_UL320_.jpg",
      price:"3,515",
      id: 5,
      cart: false,
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"Men's Renew Arena Running Shoes",
      image:"https://m.media-amazon.com/images/I/81KJkXzrB0L._AC_UL320_.jpg",
      price:"3,614",
      id: 6,
      cart: false,
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"mens Nike Zoom Winflo 7 Running Shoe",
      image:"https://m.media-amazon.com/images/I/81sp+eTUd-S._AC_UL320_.jpg",
      price:"5,698",
      id: 7,
      cart: false,
      rating:3.8,
    },
    {
      brand:"Nike",
      name:"Men's Air Max Vg-r Running Shoe",
      image:"https://m.media-amazon.com/images/I/71GuRh1JRaL._AC_UL320_.jpg",
      price:"6,556",
      id: 8,
      cart: false,
      rating:4,
    },
  ]

  const [products] = useState(shoppingProducts)

  //add to cart
const addtocart = (item) => {
    let cart2 = [...cart]
    cart2.push({ ...item })
    products.map((i) => {
      if (item.id === i.id) {
        return i.cart = true //if item added in the cart, it returns and hides add to cart button 
      }else{
        return setCart(cart2) //if item not added in the cart, it it shows add to cart button 
      }
  })
  }
  //remove from cart
const removetocart = (item) =>{
    let cart2 = cart.filter((i) => i.id !== item.id)
    products.map((i) => {
      if (item.id === i.id) {
        return i.cart = false // if item already in cart, removes item when remove button clicked
      }else{
        return setCart(cart2) 
      }
    })
}
// to total the no of item added in cart
const total = () => {
    let x = 0
    cart.map((i) => {
        return x+=1 
    })
    return x //if cart is empty it shows default value 0
  }
  return (
   <div className='containerBox'>
     <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <ul className="navbar-brand">Nike</ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                   <p className="nav-link active" aria-current="page">Home</p>
                 </li>
                 <li className="nav-item">
                   <p className="nav-link active">About</p>
                 </li>
                 <li className="nav-item dropdown">
                  <p className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Shop
                   </p>
                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><p className="dropdown-item">All Products</p></li>
                     <li><hr className="dropdown-divider"></hr></li>
                     <li><p className="dropdown-item">Popular Items</p></li>
                     <li><p className="dropdown-item">New Arrivals</p></li>
                   </ul>
                 </li>
               </ul>
               <button className="btn btn-outline-success cartBtn"> <ShoppingCartIcon/> Cart {total()}
     </button>
            </div>
           </div>
         </nav>
       </div>
   <main className='productDisplay'>
        {products.map((item,index) => (
          <section className="products"  key={index}>
                 <img className="productImg" src={item.image} alt={item.name}/>
                 <p><b>{item.brand}</b></p>
                 <p>{item.name}</p>
                 <Rating name="half-rating-read" defaultValue={item.rating}precision={0.1}readOnly/>
                <p className="pricing">₹ {item.price}</p>
                {//if item is not in cart it shows add to cart button
                  item.cart === false
                  &&
                  <button className='btn btn-primary' onClick={() => addtocart(item)}>
                    Add to cart
                </button>
                }
                {//if item in cart it shows remove button
                  item.cart === true
                  &&
                <button className='btn btn-danger'onClick={() => removetocart(item)}>
                  Remove
              </button>
          }
       </section>
))}
    </main>
</div>
);
}
