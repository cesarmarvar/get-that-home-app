import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "../components/Button/button";
import { PropertyCard } from "../components/Card/card";
import Pagination from "../components/pagination/pagination";
import { useAuth } from "../context/auth-context";
import { useProperties } from "../context/property-context";
import { getSavedProperties } from "../services/saved-properties-service";
import { GoDiffAdded } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const PropertiesContainer = styled.div`
  width: 1136px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px 86px;
`;

const Boton = styled.button`
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: 1.25px;
  color: #373737;
  border-bottom: 2px solid #BDBDBD;
  background: white;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 1.5rem auto;
  align-items: center;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  gap: 1.5rem;
`;

function SavedProperties() {
  const {paginate} = useProperties()
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [buyerProperties, setBuyerProperties] = useState(0);
  const [landlordProperties, setLandlordProperties] = useState(2);
  const {user} = useAuth();
  const [currentSelect, setCurrentSelect] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
      getSavedProperties()
        .then((data) => {
          setProperties(data);
        })
        .catch(console.log);
  }, []);

  function LandlordButtons() {
    return (
      <Container>
        <Section>
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
        </Section>
        <Button 
          IconL={GoDiffAdded}
          onClick={() => navigate("/new-property")}
        >
          New property
        </Button>
      </Container>
    )
  }

  function BuyerButtons() {
    return (
      <Container>
        <Section>
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
        </Section>
      </Container>
    )
  }

  function ActiveProperties() {
    const active = properties?.filter(property => property.is_active);
    const size = active ? paginate(active) : [];
    return (
      <>
        <Container>{size[currentPage]?.length} Properties found</Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {size[currentPage]?.map(casa => (
              <PropertyCard key={casa.id} data={casa} user={user?.user_type} />
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={Object.keys(size)} setCurrentPage={setCurrentPage}/>
      </>
    );
  }

  function ClosedProperties() {
    const closed = properties?.filter(property => !property.is_active);
    const size = closed ? paginate(closed) : [];
    return (
      <>
        <Container>{size[currentPage]?.length} Properties found</Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {size[currentPage]?.map(casa => (
              <PropertyCard key={casa.id} data={casa} user={user?.user_type}/>
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={Object.keys(size)} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  function FavoritesProperties() {
    const favorites = properties?.filter(property => property.property_status === "favorite");
    const size = favorites ? paginate(favorites) : [];
    return (
      <>
        <Container>{size[currentPage]?.length} Properties found</Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer style={{display: "flex"}}>
            {size[currentPage]?.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} user={user?.user_type}/>
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={Object.keys(size)} setCurrentPage={setCurrentPage}/>
      </>
    )
  }

  function ContactedProperties() {
    const contacted = properties?.filter(property => property.property_status === "contacted");
    const size = contacted ? paginate(contacted) : [];
    return (
      <>
        <Container>{size[currentPage]?.length} Properties found</Container>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PropertiesContainer>
            {size[currentPage]?.map(casa => (
              <PropertyCard key={casa.id} data={casa.property} user={user?.user_type}/>
            ))}
          </PropertiesContainer>
        </div>
        <Pagination currentPage={currentPage} array={Object.keys(size)} setCurrentPage={setCurrentPage}/>
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
