import "App.css";
import productData from "./data/productData.js";
const Header = () => {
  return (<div id="header" style={{display:"flex", justifyContent:"center"}}>Header
    <img className="logo" src="header.jpg" alt="Header Image" />
    <h2>Amazon</h2>
    <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
  
  </div>);
}
const Search = () => {
  return (<div className="search">
    <input type="text" placeholder="Search here"/>
    <button>Search</button>
  </div>);
}
const Product = () => {
  return (<div className="product">
    <img className="product" src="product.jpg" alt="Product Image"/>
    <h3>{product.title} </h3>
  </div>);
}
const Body = () => {
  return (<div id='body'>
    <Search/>
    <div className="product_container">
        {productData.map((product) => <Product product={product}/> )}
    </div>
  </div>);
}
const Footer = () => {
  return (<div id="footer" style={{backgroundColor:"black"}}>Footer
    <p>All rights reserved</p>
  </div>);
}
const App = () => {
  return (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
  );
};
export default App;
//component->a js function which returns jsx
