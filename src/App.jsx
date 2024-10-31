import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MenuItem from "./components/MenuItem";

// import photo
import fries from "./assets/fries.jpg";
import burger from "./assets/burger.jpg";
import pancake from "./assets/pancake.jpg";
import coffee from "./assets/coffee.jpg";
import orangejuice from "./assets/orangejuice.jpg";
import steak from "./assets/steak.jpg";
import salad from "./assets/salad.jpg";
import soup from "./assets/soup.jpg";
import salmon from "./assets/salmon.jpg";
import gyro from "./assets/gyro.jpg";
import spaghetti from "./assets/spaghetti.jpg";

// obj: Poppis Deli
// ------> User/Customer: [Profile]
/* 
  ---> Log in/SignUp ---> Email --currentlyLoggedIn

  --> View Each Menus Based on the time of day
      -> breakfast 10 lunch 5  midnight+ 
  
      ---> Storage of Receipts +LOYALTY AWARD PROGRAM +
        // ---> numOfOrders  dollarAmountSpent

*/

function App() {
  const defaultMenu = [
    { item: "itemA", price: "priceA" },
    { item: "itemB", price: "priceB" },
    { item: "itemC", price: "priceC" },
  ];

  const breakfast = [
    {
      item: "Burger",
      price: 3.99,
      photo: burger,
    },
    { item: "Fries", price: 1.99, photo: fries },
    { item: "Pancakes", price: 2.99, photo: pancake },
    { item: "coffee", price: 1.49, photo: coffee },
    { item: "Orange Juice", price: 3.99, photo: orangejuice },
  ];

  const lunch = [
    { item: "Steak", price: 10.99, photo: steak },
    { item: "Salad", price: 5.99, photo: salad },
    { item: "Soup", price: 3.99, photo: soup },
  ];

  const dinner = [
    { item: "Seafood", price: 5.99, photo: salmon },
    { item: "Gyro", price: 5.99, photo: gyro },
    { item: "Spaghetti", price: 3.99, photo: spaghetti },
  ];
  //
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });
  // useState: Profile

  const [menu, setMenu] = useState("");
  //useState: Menu

  const handleMenuSelection = (selectedMenu, menuType) => {
    setMenu({ menu: selectedMenu, type: menuType });
  };
  //when a button is clicked, handleMenuSelection is called
  // pass this as props to component menuItem

  const handleUserAccess = () => {
    console.log(`User[BEFORE]: ${user}`);
    setUser((prevUser) => ({
      ...prevUser,
      name: "James Potter",
      isLoggedIn: true,
    }));

    console.log(`User[AFTER]: ${user}`);
  };
  // use spread operator followed by the state varible with the new value
  const handleUserNameChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Oswald Cobblepot",
    }));
  };

  const handleEmailChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: "oCobble@arkham.edu",
    }));
  };
  return (
    <>
      {/* Navbar Component */}
      <Navbar
        currentUser={user}
        setUser={setUser}
        handleUserAccess={handleUserAccess}
        handleUserNameChange={handleUserNameChange}
        handleEmailChange={handleEmailChange}
      />
      {/* To determine what goes here, based on state */}
      {/* <UsersProfile /> */}

      {/* MenuContainer */}
      <MenuItem
        breakfastMenu={breakfast}
        lunchMenu={lunch}
        dinnerMenu={dinner}
        handleMenuSelection={handleMenuSelection}
        Menu={menu}
      />
    </>
  );
}

export default App;
