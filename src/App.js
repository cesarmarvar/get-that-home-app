import Header from "./components/Header/header";
import PropertyFormPage from "./pages/propery-form-page";
import { useEffect, useState } from "react";
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
import NotFound from "./pages/not-found";
import { getSavedProperties } from "./services/saved-properties-service";
<<<<<<< HEAD
import EditForm from "./components/EditForm";
=======
import { ProfilePage } from "./pages/profile-page";
>>>>>>> c22e25b (Added route to profile page)

function App() {
  const { user, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [ userType, setUserType ] = useState(0);
  const [ savedProperties, setSavedProperties ] = useState([])
  
  useEffect(() => {
    getSavedProperties()
      .then(setSavedProperties)
      .catch(console.log)
  }, []);

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
            && 
            <Modal>
              <LoginForm handleOpen={setIsOpen}/>
            </Modal>
          }
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/properties" element={<PropertiesPage />}/>
            <Route path="/register" element={<Signup setUserType={setUserType}/>}/>
            <Route path="/register/form" element={<SignupForm userType={userType}/>}/>
            <Route path="/properties/:id" element={<PropertyDetail savedProperties={savedProperties} isAuth={!!user} handleOpen={setIsOpen}/>}/>
            <Route path="/profile" element={<ProfilePage />}/>
            {
              user
              &&
              <>
                {
                  user.user_type === "landlord" && (
                    <>
                      <Route path="/new-property" element={<PropertyFormPage />} />
                      <Route path="/edit-property/:id" element={<EditForm />} />
                    </>
                  )
                }

                <Route path="/saved_properties" element={<SavedProperties />} />
              </>
            }
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}

export default App;
