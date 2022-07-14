import { Route, Routes } from "react-router-dom";
import PropertiesPage from "./pages/properties-page";

function App() {
  return (
    <Routes>
      <Route path="/properties" element={<PropertiesPage />}/>
    </Routes>
  );
}

export default App;
