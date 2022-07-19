import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";

const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(data => {
      const properties = paginate(data);
      setProperties(properties);
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

  function searchByAddress(query) {
    const allProperties = [];
    Object.values(properties).forEach(prop => {
      allProperties.push(...prop);
    })

    return allProperties.filter(prop => prop.address.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <PropertyContext.Provider
      value={{
        properties,
        paginate,
        searchByAddress
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
