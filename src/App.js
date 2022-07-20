import Header from "./components/Header/header";
import PropertyFormPage from "./pages/propery-form-page";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./context/auth-context";
import { LandingPage } from "./pages/landing-page";
import PropertiesPage from "./pages/properties-page";
import Signup from "./pages/signup-page";
import SignupForm from "./pages/signupform-page";
import { Modal } from "./pages/ui";
import SavedProperties from "./pages/saved-properties-page";
import { PropertyDetail } from "./pages/property-detail";
import Loader from "./components/Loader";

function App() {
  const { user, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [ userType, setUserType ] = useState(0);


  return (
    <>
      {
        isLoading
        ?
        <Loader />
        :
        <>
        
          <Header 
            isAuth={!!user}
            typeUser={user?.user_type}
            handleOpen={setIsOpen}
          />
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
            <Route path="/register" element={<Signup setUserType={setUserType}/>}/>
            <Route path="/register/form" element={<SignupForm userType={userType}/>}/>
            <Route path="/properties/:id" element={<PropertyDetail isAuth={!!user} handleOpen={setIsOpen}/>}/>
            {
              user
              ?
              <>
                <Route path="/new-property/form" element={<PropertyFormPage />}/>
                <Route path="/saved_properties" element={<SavedProperties />} />
              </>
              :
              null
            }
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}

export default App;