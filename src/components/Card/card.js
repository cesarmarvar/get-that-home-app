import { RiMoneyDollarCircleLine, RiBuildingLine, RiMoneyDollarCircleFill, RiCoinsLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw, FaRegEdit } from "react-icons/fa";
import { colors } from "../../styles/colors";
import { AiOutlineCloseCircle, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../context/property-context";
import * as s from "./styles";

// style={{border: "2px solid brown"}} ====> debug

export function PropertyCard({user, data}) {
  const { id, address, price,property_type, pets, bedrooms, bathrooms, area, operation_type, image_urls, is_active } = data;
  const { togleStatus } = useProperties();
  
  const navigate = useNavigate();
  
  return(
    <>
      <s.Container>
        <s.DefaultCard onClick={()=> navigate(`/properties/${id}`)}>
          { operation_type === "rent" ? (
            <s.RentalChip>
              <RiCoinsLine size="22px"/>
              <p>For Rental</p>
            </s.RentalChip>
          ) : operation_type === "sale" ? (
            <s.SaleChip>
              <RiMoneyDollarCircleFill size="22px"/>
              <p>For Sale</p>
            </s.SaleChip>
          ) : null}
          <div style={{overflow: "hidden", borderTopLeftRadius: "8px", borderTopRightRadius: "8px",}}>
            {image_urls ? <s.PropertyImg src={JSON.parse(image_urls)[0]}/> : null}
          </div>
          <s.PropertyData>
            <s.PriceRow>
              <s.Price style={{width: "161px"}}>
                <RiMoneyDollarCircleLine size="30px" color={`${colors.gray.dark}`}/>
                <p style={{color: `${colors.gray.dark}`}}>{price}</p>
              </s.Price>
              <s.PropertyType>
                <RiBuildingLine size="30px" color={`${colors.gray.light}`}/>
                <p>{property_type}</p>
              </s.PropertyType>
            </s.PriceRow>
            <s.AddressAndIcons>
              <s.Adress>{address}</s.Adress>
              <s.IconsRow>
                <s.SingleIcon>
                  <BiBed size="20px" color={`${colors.gray.regular}`}/>
                  <div>{bedrooms}</div>
                </s.SingleIcon>
                <s.SingleIcon>
                  <BiBath size="20px" color={`${colors.gray.regular}`}/>
                  <div>{bathrooms}</div>
                </s.SingleIcon>
                <s.SingleIcon>
                  <BiArea size="20px" color={`${colors.gray.regular}`}/>
                  <div>{area} m2</div>
                </s.SingleIcon>
                { pets ? <FaPaw size="20px" color={`${colors.gray.regular}`}/> : null}
                <AiFillHeart size="20px" color={`${colors.gray.regular}`}/>
              </s.IconsRow>
            </s.AddressAndIcons>
          </s.PropertyData>
        </s.DefaultCard>
        { user === "homeseeker" ? <s.DefaultBottom /> : 
        user === "landlord" ? (
          <s.LandlordButtons>
          <s.ButtonsContainer>
            <s.CardButton>
              <FaRegEdit size="18px"/>
              <p>EDIT</p>
            </s.CardButton>
            <s.CardButton onClick={()=>togleStatus(id)}>
              <AiOutlineCloseCircle size="20px"/>
             { is_active? <p>CLOSE</p>:<p>RESTORE</p>}
            </s.CardButton>
          </s.ButtonsContainer>
        </s.LandlordButtons>
        ) : null}
      </s.Container>
    </>
  )
}
