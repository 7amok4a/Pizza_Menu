import React from "react"; 
import ReactDom  from "react-dom/client" ; 
import './index.css' ; 


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App() {
   return ( 
    <div className="container">
         <Header /> 
         <Menu />
         <Footer />
    </div>
   
    
) ; 
}

function Header() {

    return (
        <header className="header">
          <div className="container">
           <h1>FAST REACT PIZZA CO.</h1>
         </div>
        </header>
    ) ; 
}



function Menu() {
    const pizzas = pizzaData ; 
    const lenofPizzas = pizzas.length ; 


    return (

        <main className="menu">
            <h2>Our Menu</h2>

            {lenofPizzas > 0 ? 
            
            (<React.Fragment>
                <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
               </p>

               <ul className = "pizzas">
                    {pizzas.map((pizza)=> (<Pizza pizzaObj={pizza} key={pizza.name}/>))}

               </ul>
            </React.Fragment>)
        
            : (<p>We're still working on our menu. Please come back later :)</p>)}
        </main>
    )

} 


function Pizza({pizzaObj}) {
    //if (pizzaObj.soldOut) return null;
    return (

        <li className={`pizza ${pizzaObj.soldOut ? "sold-ou" : ""}`}>
            <img src = {pizzaObj.photoName} alt ={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
            </div>
        </li>
    )
}


function Footer () {

 
    // const currentTime = new Date().toLocaleDateString();
    const hours =  new Date().getHours();
    const minutes = new Date().getMinutes();
    console.log(hours);

    const open = 8 ; 
    const close = 22 ; 

    const isWork = hours >= open && hours <= close ; 
    return (
        <footer className ="footer">
            {isWork ? (<Work open = {open} close = {close}/>) :
            (<p>
                We're happy to welcome you between {open}:00 and {close}:00.
              </p>)}
        </footer>
    ) ; 
}


function Work({open , close}) {

    return (

        <div className="order">
            <p>
                We're open from {open}:00 to {close}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>

        </div>
    )
}





const root = ReactDom.createRoot(document.getElementById("root")) ; 

root.render(
<React.StrictMode>
<App />
</React.StrictMode>
) ; 