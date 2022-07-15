import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import { useAuth } from "./context/auth-context";
import { LandingPage } from "./pages/landing-page";
import PropertiesPage from "./pages/properties-page";
import Signup from "./pages/signup-page";
import SignupForm from "./pages/signupform-page";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header 
        isAuth={!!user}
        typeUser={user?.user_type}
      />
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
