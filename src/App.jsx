import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MenuItem from "./components/MenuItem";

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
    { item: "hamburger", price: 3.99 },
    { item: "fries", price: 1.99 },
    { item: "pancakes", price: 2.99 },
  ];

  const lunch = [
    { item: "steak", price: 10.99 },
    { item: "salad", price: 5.99 },
    { item: "soup", price: 3.99 },
  ];

  const dinner = [
    { item: "seafood", price: 5.99 },
    { item: "gyro", price: 5.99 },
    { item: "shrimp pasta", price: 3.99 },
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

  const handleMenuSelection = (menu) => {
    setMenu(menu);
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
      {/* Navbar */}
      <button onClick={handleUserAccess}>HandleMe</button>
      <button onClick={handleEmailChange}>Edit Email</button>
      {/*component Navbar */}
      <Navbar currentUser={user} />
      {/* To determine what goes here, based on state */}
      {/* <UsersProfile /> */}

      {/* MenuContainer */}
      <MenuItem
        breakfastMenu={breakfast}
        lunchMenu={lunch}
        dinnerMenu={dinner}
        handleMenuSelection={handleMenuSelection}
        menu={menu}
      />
    </>
  );
}

export default App;
