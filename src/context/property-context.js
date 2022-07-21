import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty, getProperties } from "../services/properties-service";

const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties().then(data => {
      setProperties(data);
    }).catch(console.error);
  }, []);

  function paginate(array) {
    const data = {};
    let limit = 9;
    let i = 1;
    const size = Math.ceil(array.length/limit) + 1;
    array.forEach(_val => {
      if(i === size) return;
      data[i] = array.filter((_prop, idx) => idx < limit && idx >= limit - 9);
      limit = limit + 9;
      i++;
    });

    return data;
  }

  function newProperty(data) {
    createProperty(data).then(prop => {
      navigate("/saved_properties");
      setProperties(props => {
        return [...props, prop];
      })
    }).catch((e) => setError(e.message));
  }

  function searchByAddress(query) {
    return properties.filter(prop => prop.address.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <PropertyContext.Provider
      value={{
        properties: paginate(properties),
        error,
        paginate,
        searchByAddress,
        newProperty
      }}
    >
      { children }
    </PropertyContext.Provider>
  )
}

function useProperties() {
  return useContext(PropertyContext);
}

export { PropertyProvider, useProperties }
