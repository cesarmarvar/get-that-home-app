import Header from "../components/Header/header";
import { useAuth } from "../context/auth-context";

function PropertiesPage() {
  const { user } = useAuth();

  return (
    <Header 
    isAuth={!!user}
    typeUser={user?.user_type}
    />
  );
}

export default PropertiesPage;
