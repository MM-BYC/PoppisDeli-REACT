import React from "react";

function MenuItem({
  breakfastMenu,
  lunchMenu,
  dinnerMenu,
  handleMenuSelection,
  Menu,
}) {
  return (
    <>
      <div className="buttonContainer">
        <button onClick={() => handleMenuSelection(breakfastMenu, "Breakfast")}>
          Breakfast
        </button>
        <button onClick={() => handleMenuSelection(lunchMenu, "Lunch")}>
          Lunch
        </button>
        <button onClick={() => handleMenuSelection(dinnerMenu, "Dinner")}>
          Dinner
        </button>
      </div>
      {Menu.menu && (
        <div>
          <h2>{Menu.type} Menu</h2>
          <ul>
            {Menu.menu.map((item) => (
              <li key={item.item}>
                {item.item} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MenuItem;
