import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";

const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProperties().then(data => {
      const properties = paginate(data);
      setProperties(properties);
      setTimeout(() => { setIsLoading(false) }, 500);
    }).catch(_e => {
      setIsLoading(false);
    });
  }, []);

  function paginate(array) {
    const data = {};
    let limit = 9;
    for(let i = 1; i<=Math.ceil(array.length/9); i++){
      properties[i] = array.filter((_prop, idx) => idx < limit && idx >= limit - 9);
      limit = limit + 9;
    }

    return data
  }

  function searchByAddress(query, currentProperties) {
    const allProperties = [];
    Object.values(currentProperties).forEach(prop => {
      allProperties.push(...prop);
    })

    return paginate(allProperties.filter(prop => prop.address.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <PropertyContext.Provider
      value={{
        properties,
        isLoading,
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
