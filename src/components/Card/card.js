import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine, RiBuildingLine, RiMoneyDollarCircleFill, RiCoinsLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw, FaRegEdit } from "react-icons/fa";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/fonts";
import { AiOutlineCloseCircle, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useProperties } from "../../context/property-context";


const RentalChip = styled.div`
  width: 110px;
  height: 25px;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  gap: 4px;
  background-color: ${colors.pink.regular};
  color: ${colors.white};
  font-family: ${fonts.primary};
  ${typography.body.b2}
  position: absolute;
  left: 190px;
  border-top-right-radius: 8px;
`

const SaleChip = styled.div`
  width: 110px;
  height: 25px;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  gap: 4px;
  background-color: ${colors.pink.dark};
  color: ${colors.white};
  font-family: ${fonts.primary};
  ${typography.body.b2}
  position: absolute;
  left: 190px;
  border-top-right-radius: 8px;
`

const DefaultCard = styled.div`
  position: relative;
  width: 300px;
  height: 360px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const PropertyImg = styled.img`
  width: 300;
  height: 200px;
`

const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 8px;
  
`

const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.secundary}; // confirmar si este es Montserrat
  ${typography.headline.h5};
`

const PropertyType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.primary};
  color: ${colors.gray.light};
  ${typography.body.b1}
`

const AddressAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  align-items: flex-start;
`

const Adress = styled.p`
  color: ${colors.gray.dark};
  font-family: ${fonts.secundary};
  ${typography.subtitle.s1}; // Pendiente corregir el line height: debe ser 24.
  padding-top: 1rem;
`

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: ${colors.gray.regular};
  ${typography.body.b1};
  font-family: ${fonts.primary}
`

const SingleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

// ======== Bottom para el default card (cuando no eres un landlord) ==================================

const DefaultBottom = styled.div`
  width: 300px;
  height: 7px;
  background-color: ${colors.pink.dark};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

// ======== Bottom para los landlords (tienen botones para editar y cerrar la venta/alquiler) ==========

const LandlordButtons = styled.div`
  width: 300px;
  height: 47px;
  background-color: ${colors.pink.dark};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 32px;
  `

  const CardButton = styled.button`
    border: none;
    background-color: ${colors.pink.dark};
    color: ${colors.white};
    font-family: ${fonts.primary};
    ${typography.button};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  `;

// style={{border: "2px solid brown"}} ====> debug

export function PropertyCard({user, data}) {
  const { id, address, price,property_type, pets, bedrooms, bathrooms, area, operation_type, image_urls, is_active } = data;
  const { togleStatus } = useProperties();
  
  const navigate = useNavigate();
  
  return(
    <>
      <div style={{cursor: "pointer"}}>
        <DefaultCard onClick={()=> navigate(`/properties/${id}`)}>
          { operation_type === "rent" ? (
            <RentalChip>
              <RiCoinsLine size="22px"/>
              <p>For Rental</p>
            </RentalChip>
          ) : operation_type === "sale" ? (
            <SaleChip>
              <RiMoneyDollarCircleFill size="22px"/>
              <p>For Sale</p>
            </SaleChip>
          ) : null}
          <div style={{overflow: "hidden", borderTopLeftRadius: "8px", borderTopRightRadius: "8px",}}>
            {image_urls ? <PropertyImg src={JSON.parse(image_urls)[0]}/> : null}
          </div>
          <PropertyData>
            <PriceRow>
              <Price style={{width: "161px"}}>
                <RiMoneyDollarCircleLine size="30px" color={`${colors.gray.dark}`}/>
                <p style={{color: `${colors.gray.dark}`}}>{price}</p>
              </Price>
              <PropertyType>
                <RiBuildingLine size="30px" color={`${colors.gray.light}`}/>
                <p>{property_type}</p>
              </PropertyType>
            </PriceRow>
            <AddressAndIcons>
              <Adress>{address}</Adress>
              <IconsRow>
                <SingleIcon>
                  <BiBed size="20px" color={`${colors.gray.regular}`}/>
                  <div>{bedrooms}</div>
                </SingleIcon>
                <SingleIcon>
                  <BiBath size="20px" color={`${colors.gray.regular}`}/>
                  <div>{bathrooms}</div>
                </SingleIcon>
                <SingleIcon>
                  <BiArea size="20px" color={`${colors.gray.regular}`}/>
                  <div>{area} m2</div>
                </SingleIcon>
                { pets ? <FaPaw size="20px" color={`${colors.gray.regular}`}/> : null}
                <AiFillHeart size="20px" color={`${colors.gray.regular}`}/>
              </IconsRow>
            </AddressAndIcons>
          </PropertyData>
        </DefaultCard>
        { user === "homeseeker" ? <DefaultBottom /> : 
        user === "landlord" ? (
          <LandlordButtons>
          <ButtonsContainer>
            <CardButton>
              <FaRegEdit size="18px"/>
              <p>EDIT</p>
            </CardButton>
            <CardButton onClick={()=>togleStatus(id)}>
              <AiOutlineCloseCircle size="20px"/>
             { is_active? <p>CLOSE</p>:<p>RESTORE</p>}
            </CardButton>
          </ButtonsContainer>
        </LandlordButtons>
        ) : null}
      </div>
    </>
  )
}