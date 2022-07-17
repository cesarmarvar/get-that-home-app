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

const Boton = styled.button`
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: 1.25px;
  color: #373737;
  border-bottom: 2px solid #BDBDBD;
  background: white;
  margin-top: 2rem;
  &:focus {
    border-bottom: 2px solid #F48FB1;
    color: #8E8E8E;
  }
`

const Info = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;´
  color: #616161;
  margin-top: 1rem;
  margin-left: 156px;
`

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buyerProperties, setBuyerProperties] = useState(0);
  const [landlordProperties, setLandlordProperties] = useState(2);
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
  // if(isLoading) {
  //   console.log("Loading")
  // } else {
  //   console.log(properties)
  // }

  function LandlordButtons() {
    return (
      <div style={{display: "flex", gap: "1.5rem", marginLeft: "156px"}}>
        <Boton onClick={() => setLandlordProperties(2)}>ACTIVE</Boton>
        <Boton onClick={() => setLandlordProperties(3)}>CLOSED</Boton>
      </div>
    )
  }

  function BuyerButtons() {
    return (
      <div style={{display: "flex", gap: "1.5rem", marginLeft: "156px"}}>
        <Boton onClick={() => setBuyerProperties(0)}>FAVORITES</Boton>
        <Boton onClick={() => setBuyerProperties(1)}>CONTACTED</Boton>
      </div>
    )
  }

  function ActiveProperties() {
    const active = properties.filter(property => property.is_active)
    return (
      <>
        <Info>{active.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {active.map(casa => (
              <PropertyCard key={casa.id} data={casa} />
            ))}
          </PropertiesContainer>
        </div>
      </>
    )
  }

  function ClosedProperties() {
    const closed = properties.filter(property => !property.is_active)
    return (
      <>
        <Info>{closed.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {closed.map(casa => (
              <PropertyCard key={casa.id} data={casa} />
            ))}
          </PropertiesContainer>
        </div>
      </>
    )
  }

  function FavoritesProperties() {
    const favorites = properties.filter(property => property.property_status === "favorite")
    return (
      <>
        <Info>{favorites.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {favorites.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} />
            ))}
          </PropertiesContainer>
        </div>
      </>
    )
  }

  function ContactedProperties() {
    const contacted = properties.filter(property => property.property_status === "contacted")
    return (
      <>
        <Info>{contacted.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer>
            {contacted.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} />
            ))}
          </PropertiesContainer>
        </div>
      </>
    )
  }

  console.log(landlordProperties)

  return (
    <>
      { user?.user_type === "landlord" ? <LandlordButtons /> : <BuyerButtons />}
      { landlordProperties === 2 ? <ActiveProperties /> : <ClosedProperties /> }
      { buyerProperties === 0 ? <FavoritesProperties /> : <ContactedProperties /> }
    </>
  )

}

export default SavedProperties;