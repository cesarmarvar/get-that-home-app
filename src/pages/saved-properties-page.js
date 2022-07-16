import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { PropertyCard } from "../components/Card/card";
import { getSavedProperties } from "../services/saved-properties-service";

const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 86px 1fr 86px 1fr;
  margin: auto;
`

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      getSavedProperties()
        // .then(response => response.json())
        .then((data) => {
          setProperties(data);
          setTimeout(() => {
            setIsLoading(false)
          
          }, 500);
        })
        .catch(console.log);
  }, [])
  if(isLoading) {
    console.log("Loading")
  } else {
    console.log(properties)
  }

  return (
    <PropertiesContainer>
      {properties.map(property => (
        <PropertyCard key={property.id} data={property} />
      ))}

    </PropertiesContainer>
  )

}

export default SavedProperties;