import { createContext, useContext, useEffect, useState } from "react";
import { createSavedProperty, destroySavedProperty, getSavedProperties } from "../services/saved-properties-service";

const SavedPropertyContext = createContext();

function SavedPropertyProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);
  
  useEffect(() => {
    getSavedProperties().then(data => {
      setSavedProperties(data);
    });
  }, []);

  function newSavedProperty(id) {
    return createSavedProperty(id).then(data => {
      setSavedProperties([...savedProperties, data]);
      return data;
    });
  }

  function deleteSavedProperty(id) {
    return destroySavedProperty(id).then(data => {
      const newSavedProperties = savedProperties.filter(prop => prop.id !== id);
      setSavedProperties(newSavedProperties);
      return data;
    });
  }

  return (
    <SavedPropertyContext.Provider
      value={{
        savedProperties,
        newSavedProperty,
        deleteSavedProperty
      }}
    >
      { children }
    </SavedPropertyContext.Provider>
  );
}

function useSavedProperties() {
  return useContext(SavedPropertyContext);
}

export { SavedPropertyProvider, useSavedProperties }
