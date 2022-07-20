import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { PropertyCard } from "../components/Card/card";
import Pagination from "../components/pagination/pagination";
import { useAuth } from "../context/auth-context";
import { useProperties } from "../context/property-context";
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
  // &:focus {
  //   border-bottom: 2px solid #F48FB1;
  //   color: #373737;
  // }
`

const Info = styled.p`
  width: 1136px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;´
  color: #616161;
  margin: 1rem auto;
`

function SavedProperties() {
  const {paginate} = useProperties()
  const [properties, setProperties] = useState({});
  const [currentPage, setCurrentPage] = useState(1)
  const [buyerProperties, setBuyerProperties] = useState(0);
  const [landlordProperties, setLandlordProperties] = useState(2);
  const {user} = useAuth();
  const [currentSelect, setCurrentSelect] = useState(0);

  useEffect(() => {
      getSavedProperties()
        .then((data) => {
          const properties = paginate(data);
          setProperties(properties);
        })
        .catch(console.log);
  }, [])

  function LandlordButtons() {
    return (
      <div style={{display: "flex", gap: "1.5rem", width: "1136px", margin: "0 auto"}}>
        <Boton 
          style={{  
            borderBottom: currentSelect === 0 ? "2px solid #F48FB1" : "2px solid #BDBDBD", 
            color: currentSelect === 0 ? "#373737" : "#8E8E8E"
          }} 
          onClick={() => {
            setLandlordProperties(2);
            setCurrentSelect(0)
          }}>ACTIVE
        </Boton>
        <Boton
          style={{  
            borderBottom: currentSelect === 1 ? "2px solid #F48FB1" : "2px solid #BDBDBD", 
            color: currentSelect === 1 ? "#373737" : "#8E8E8E"
          }}
          onClick={() => {
            setLandlordProperties(3);
            setCurrentSelect(1);
            }}>CLOSED
          </Boton>
      </div>
    )
  }

  function BuyerButtons() {
    return (
      <div style={{display: "flex", gap: "1.5rem"}}>
        <Boton
          style={{  
            borderBottom: currentSelect === 0 ? "2px solid #F48FB1" : "2px solid #BDBDBD", 
            color: currentSelect === 0 ? "#373737" : "#8E8E8E"
          }}
          onClick={() => {
            setBuyerProperties(0);
            setCurrentSelect(0);
          }}>FAVORITES</Boton>
        <Boton
          style={{  
            borderBottom: currentSelect === 1 ? "2px solid #F48FB1" : "2px solid #BDBDBD", 
            color: currentSelect === 1 ? "#373737" : "#8E8E8E"
          }}
          onClick={() => {
            setBuyerProperties(1);
            setCurrentSelect(1);
          }}>CONTACTED</Boton>
      </div>
    )
  }

  function ActiveProperties() {
    const active = properties[currentPage]?.filter(property => property.is_active)
    const size = [];
    Object.values(properties).forEach(prop => {
      size.push(...prop);
    })
    return (
      <>
        <Info>{size.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {active?.map(casa => (
              <PropertyCard key={casa.id} data={casa} user={user?.user_type} />
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={Object.keys(properties)} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  function ClosedProperties() {
    const closed = properties[currentPage]?.filter(property => !property.is_active)
    return (
      <>
        <Info>{closed?.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {closed?.map(casa => (
              <PropertyCard key={casa.id} data={casa} />
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={closed} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  function FavoritesProperties() {
    const favorites = properties[currentPage]?.filter(property => property.property_status === "favorite")
    return (
      <>
        <Info>{favorites?.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {favorites?.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} />
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={favorites} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  function ContactedProperties() {
    const contacted = properties[currentPage]?.filter(property => property.property_status === "contacted")
    return (
      <>
        <Info>{contacted?.length} Properties found</Info>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer>
            {contacted?.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} />
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={contacted} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        { user?.user_type === "landlord" ? <LandlordButtons /> : <BuyerButtons />}
        { user?.user_type === "landlord" ? (landlordProperties === 2 ? 
        <ActiveProperties /> : <ClosedProperties />) : (buyerProperties === 0 ? 
        <FavoritesProperties /> : <ContactedProperties />) }
      </div>
    </>
  )

}

export default SavedProperties;