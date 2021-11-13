import './App.css';
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";




export default function App(){
  const shoppingProducts =[
    {
      brand:"Nike",
      name:"Men's Air Max Excee Running Shoes",
      image:"https://m.media-amazon.com/images/I/81Wt+uytSLL._AC_UL320_.jpg",
      price:"3,336",
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"Men's Renew Ride Running Shoes",
      image:"https://m.media-amazon.com/images/I/61iK-U9enSL._AC_UL320_.jpg",
      price:"2,217",
      rating:4,
    },
    {
      brand:"Nike",
      name:"Women's Flex Fury 2 Running Shoes",
      image:"https://m.media-amazon.com/images/I/719GdOZCGAL._AC_UL320_.jpg",
      price:"3,305",
      rating:4.3,
    },
    {
      brand:"Nike",
      name:"mens Nike Todos Running Shoes",
      image:"https://m.media-amazon.com/images/I/71YWn0X2NQL._AC_UL320_.jpg",
      price:"3,355",
      rating:4.25,
    },
    {
      brand:"Nike",
      name:"Men Downshifter 8 Running Shoes",
      image:"https://m.media-amazon.com/images/I/61HGV9gCslL._AC_UL320_.jpg",
      price:"3,515",
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"Men's Renew Arena Running Shoes",
      image:"https://m.media-amazon.com/images/I/81KJkXzrB0L._AC_UL320_.jpg",
      price:"3,614",
      rating:4.5,
    },
    {
      brand:"Nike",
      name:"mens Nike Zoom Winflo 7 Running Shoe",
      image:"https://m.media-amazon.com/images/I/81sp+eTUd-S._AC_UL320_.jpg",
      price:"5,698",
      rating:3.8,
    },
    {
      brand:"Nike",
      name:"Men's Air Max Vg-r Running Shoe",
      image:"https://m.media-amazon.com/images/I/71GuRh1JRaL._AC_UL320_.jpg",
      price:"6,556",
      rating:4,
    },
  ]
  return (
    <div className="App">
      <Navbar/>
      <div className="productList">
 {shoppingProducts.map((li,index)=><Products key={index} brand={li.brand} name={li.name} image={li.image} price={li.price} rating={li.rating}/>)}
 </div>
    </div>
);}

function Products({brand,image,name,price,rating}){
  return(
  <section className="products">
      <img className="productImg" src={image} alt={name}/>
       <p><b>{brand}</b></p>
       <p>{name}</p>
       <Rating name="half-rating-read" defaultValue={rating}precision={0.1}readOnly/>
      <p className="pricing">₹ {price}</p>
      {/* <Button className="btnAddCart" variant="contained">Add to cart</Button> */}
      <div className="btn-cart">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button className="btnChange">+1</Button>
  <Button className="btnChange">-1</Button>
</ButtonGroup>
<Counter/>
</div>
  </section>
  )}

  function Counter() {
    const [add, setAdd] = useState(0);
  
    return (
      <div>
        <button className="button" onClick={() => setAdd(add + 1)}>👍 {add}</button>
        <button className="button" onClick={() => setAdd(add - 1)}>👎</button>
        {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
    <Button onClick={handleClick1} className="btnChange">+1{count}</Button>
    <Button onClick={handleClick2} className="btnChange">-1</Button>
  </ButtonGroup> */}
      </div>
    );
  }


function Navbar() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <p className="navbar-brand">Navbar</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page">Home</p>
                </li>
                <li className="nav-item">
                  <p className="nav-link">About</p>
                </li>
                <li className="nav-item dropdown">
                  <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit"><i className="fa fa-shopping-cart"></i> Cart <span></span></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  



  




