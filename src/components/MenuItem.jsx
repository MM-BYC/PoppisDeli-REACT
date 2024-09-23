import React from "react";

function MenuItem({
  breakfastMenu,
  lunchMenu,
  dinnerMenu,
  handleMenuSelection,
  menu,
}) {
  return (
    <>
      <div>
        <button onClick={() => handleMenuSelection(breakfastMenu)}>
          Breakfast
        </button>
        <button onClick={() => handleMenuSelection(lunchMenu)}>Lunch</button>
        <button onClick={() => handleMenuSelection(dinnerMenu)}>Dinner</button>
      </div>
      {menu.length > 0 && (
        <div>
          <h2>Menu</h2>
          <ul>
            {menu.map((item) => (
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
