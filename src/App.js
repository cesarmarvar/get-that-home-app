import Header from "./components/Header/header";
import PropertyFormPage from "./pages/propery-form-page";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./context/auth-context";
import { LandingPage } from "./pages/landing-page";
import PropertiesPage from "./pages/properties-page";
import Signup from "./pages/signup-page";
import SignupForm from "./pages/signupform-page";
import { Modal } from "./pages/ui";


function App() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header 
        isAuth={!!user}
        typeUser={user?.user_type}
        handleOpen={setIsOpen}
      />
      <PropertyFormPage/>
      {
        isOpen
        ?
        <Modal>
          <LoginForm handleOpen={setIsOpen}/>
        </Modal>
        :
        null
      }
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/properties" element={<PropertiesPage />}/>
        <Route path="/register" element={<Signup />}/>
        <Route path="/register/form" element={<SignupForm />}/>
      </Routes>
    </>
  );
}

export default App;
