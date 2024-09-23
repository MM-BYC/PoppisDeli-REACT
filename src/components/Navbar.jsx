import React from "react";

function Navbar({ currentUser }) {
  console.log("Rendering Navbar with:", currentUser);

  return (
    <>

      <div className="profileNav">
        <p>
          Logged In: <br />
          <span style={{ color: "peru" }}>{currentUser.email} </span>{" "}
        </p>
        {currentUser.isLoggedIn ? (
          <button>Log Out</button>
        ) : (
          <button>Sign-In</button>
        )}
      </div>
    </>
  );
}

export default Navbar;
