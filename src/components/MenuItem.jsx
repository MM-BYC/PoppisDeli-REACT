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
          <h2 className="menuContainer">{Menu.type} Menu</h2>

          <div className="menu-items">
            {Menu.menu.map((item) => (
              <div key={item.item} className="menu-item">
                {item.photo && (
                  <img
                    src={item.photo}
                    alt={item.item}
                    width="150"
                    height="150"
                  />
                )}{" "}
                <div className="menu-item">
                  {item.item} - ${item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;
