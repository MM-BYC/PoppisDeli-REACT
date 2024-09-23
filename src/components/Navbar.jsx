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
      <button onClick={handleLoginLogout}>
        {currentUser.isLoggedIn ? "Log Out" : "Sign-In"}
      </button>
      <div className="profileNav">
        <p>
          Logged In:
          {currentUser.isLoggedIn
            ? `${currentUser.name} - ${currentUser.email}`
            : ""}
        </p>
      </div>
    </>
  );
}

export default Navbar;
