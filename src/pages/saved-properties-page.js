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

  function LandlordButtons() {
    return (
      <div>
        <button onClick={() => ActiveProperties}>ACTIVE</button>
        <button onClick={ClosedProperties}>CLOSED</button>
      </div>
    )
  }

  function BuyerButtons() {
    return (
      <div>
        <button onClick={() => ActiveProperties}>FAVORITES</button>
        <button onClick={ClosedProperties}>CONTACTED</button>
      </div>
    )
  }

  function ActiveProperties() {
    const active = properties.filter(property => property.is_active)
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <PropertiesContainer style={{display: "flex"}}>
          {active.map(casa => (
            <PropertyCard key={casa.id} data={casa} />
          ))}
        </PropertiesContainer>
      </div>
    )
  }

  function ClosedProperties() {
    const closed = properties.filter(property => !property.is_active)
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <PropertiesContainer style={{display: "flex"}}>
          {closed.map(casa => (
            <PropertyCard key={casa.id} data={casa} />
          ))}
        </PropertiesContainer>
      </div>
    )
  }

  function FavoritesProperties() {
    const favorites = properties.filter(property => property.property_status === "favorite")
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <PropertiesContainer style={{display: "flex"}}>
          {favorites.map(casa => (
            <PropertyCard key={casa.id} data={casa} />
          ))}
        </PropertiesContainer>
      </div>
    )
  }

  function ContactedProperties() {
    const contacted = properties.filter(property => property.property_status === "contacted")
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <PropertiesContainer>
          {contacted.map(casa => (
            <PropertyCard key={casa.id} data={casa} />
          ))}
        </PropertiesContainer>
      </div>
    )
  }

  console.log(user)

  return (
    <>
      { user.user_type === "buyer" ? <LandlordButtons /> : <BuyerButtons />}
      <p>{properties.length} Properties found</p>
      <div style={{display: "flex", justifyContent: "center"}}>

        {/* <ActiveProperties></ActiveProperties> */}
      </div>
    </>
  )

}

export default SavedProperties;