import React, {useState} from 'react';
import './App.css';
import Amazon from './Components/Amazon';
import Apple from './Components/Apple';
import styles from "./Components/card.module.css"

function App() {

  const [toggle, setToggle] = useState(false);

  const info = [
    {
      date : "28/10/2020",
      logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ejmg7T8Y4T5yIzlxL3fvrcHCbKxwuG53xg&usqp=CAU", 
      heading: "Amazon Gift",
      subheading : "Pay",
      devices : "Desktop - Mobile",
      color: "#ff9900",
    },
    {
      date : "17 Sep 2020",
      logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxKBVF-iPkIARTpIWo_NIVfR1vGjHN7NAYg&usqp=CAU", 
      heading: "Apple Gift",
      subheading : "Payment",
      devices : "MacOS - Mobile",
      color: "#eee",
    },
  ]

  return (
    <div className="App">
        <button className={styles.togglebtn} onClick={()=> setToggle(!toggle)}>{toggle ? "Show Amazon Card": "Show Apple Card"}</button>
        <br/>
        <br/>
        <br/>
        <br/>
        {toggle? <Apple info={info[1]}/> : <Amazon info={info[0]} />}
    </div>
  );
}

export default App;
