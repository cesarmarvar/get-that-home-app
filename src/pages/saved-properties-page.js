import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { PropertyCard } from "../components/Card/card";
import { useAuth } from "../context/auth-context";
import { getSavedProperties } from "../services/saved-properties-service";

const PropertiesContainer = styled.div`
  width: 1136px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px 86px;
`

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
      getSavedProperties()
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

  function ActiveProperties() {
    const active = properties.filter(property => property.is_active)
    return (
      <PropertiesContainer style={{display: "flex"}}>
        {active.map(casa => (
          <PropertyCard key={casa.id} data={casa} />
        ))}
      </PropertiesContainer>
    )
  }

  function ClosedProperties() {
    const closed = properties.filter(property => !property.is_active)
    return (
      <PropertiesContainer style={{display: "flex"}}>
        {closed.map(casa => (
          <PropertyCard key={casa.id} data={casa} />
        ))}
      </PropertiesContainer>
    )
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {/* <PropertiesContainer> */}
        <ActiveProperties></ActiveProperties>
      {/* </PropertiesContainer> */}
    </div>
  )

}

export default SavedProperties;