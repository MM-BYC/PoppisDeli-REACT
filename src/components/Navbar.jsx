import React from "react";

function Navbar({
  currentUser,
  setUser,
  handleUserAccess,
  handleUserNameChange,
  handleEmailChange,
}) {
  console.log("Rendering Navbar with:", currentUser);

  const handleLoginLogout = () => {
    if (currentUser.isLoggedIn) {
      // Logout logic
      setUser((prevUser) => ({ ...prevUser, isLoggedIn: false }));
    } else {
      // Login logic (call handleUserAccess)
      handleUserAccess();
      handleUserNameChange();
      handleEmailChange();
    }
  };

  return (
    <>
      <div className="profileNav">
        <p>Logged In:</p>
        <p>
          {currentUser.isLoggedIn
            ? `${currentUser.name} - ${currentUser.email}`
            : ""}
        </p>
        <button onClick={handleLoginLogout}>
          {currentUser.isLoggedIn ? "Log Out" : "Sign-In"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
