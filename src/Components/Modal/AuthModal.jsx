import { useState } from "react";
import Login from "./Login";
import SignupForm from "./SignupForm";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setShowSignup(false);
  };

  return (
    <>
      {isOpen && !showSignup && (
        <Login
          isOpen={isOpen}
          onClose={closeModal}
          sendDataToParent={setShowSignup}
        />
      )}

      {isOpen && showSignup && (
        <SignupForm
          onClose={closeModal}
          sendDataToParent={setShowSignup}
        />
      )}
    </>
  );
};

export default AuthModal;
