import { useState } from "react";
import Signup from "./pages/signup-page";
import SignupForm from "./pages/signupform-page";

function App() {

  const [userType, setUserType] = useState(null)
  return (
    <>
      <SignupForm user={userType} />
      <Signup setUser={setUserType} />
    </>
  );
}

export default App;