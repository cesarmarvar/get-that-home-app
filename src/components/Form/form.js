import { BiSearch } from "react-icons/bi"
import Input from "../Input";
import { WrapperForm } from "./styles";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {PhotosInput, LikeLabel, TextP, SwitchOperation} from "./utils";
import styled from "@emotion/styled";
import { typography } from "../../styles";
import Button from "../Button";
import { useState } from "react";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

const TitlePage = styled.h2`
  ${typography.headline.h4};
`;

const ContainerRadio = styled.div`
  display: flex;
  gap: 1rem;
`;

function Form({title="Create a property listing"}) {
  const [formData, setFormData] = useState({
    address: "",
    rent: "",
    price: "",
    maintanance: "",
    description:"",
    aparment:"",
    house:"",
    pets:""
  });
  
  const {
    address,
    rent,
    price,
    maintanance,
    description,
    aparment,
    house,
    pets
  } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  };

  function handleSubmit(event) {
    event.preventDefault();
    // login(formData)
  }


  return(
    <WrapperForm onSubmit={handleSubmit}>
      <TitlePage>{title}</TitlePage>
      <SwitchOperation/>
      <Input
        label="address"
        id="address"
        size="lg"
        IconL={BiSearch}
        placeholder="start typing to autocomplete"
        value={address}
        onChange={handleChange}
      />
      <Input
        type= "number"
        label="montly rent"
        id="rent"
        size="sm"
        IconL={RiMoneyDollarCircleLine}
        placeholder="2000"
        value={rent}
        onChange={handleChange}
      />
      <Input
        type= "number"
        label="Price"
        id="price"
        size="sm"
        IconL={RiMoneyDollarCircleLine}
        placeholder="2000"
        value={price}
        onChange={handleChange}
      />
      <Input
        type= "number"
        label="Maintanance"
        id="maintanance"
        size="sm"
        IconL={RiMoneyDollarCircleLine}
        placeholder="100"
        value={maintanance}
        onChange={handleChange}
      />
      <LikeLabel>Property Type</LikeLabel>
      <ContainerRadio>
        <Radio
          children="Aparment"
          value={aparment}
          name="property"
        />
        <Radio
          children="House"
          value={house}
          name="property"
        />
      </ContainerRadio>
      <Checkbox 
        children="Pets Allowed"
        value={pets}
        name="pets" 
      />
      <TextP>Allowing pets increases the likehood of renters  liking the property by 9001%.
It also makes you a better person.</TextP>
      <Input
        label="About this property"
        id="description"
        size="other"
        placeholder="My apartment is great because..."
        value={description}
        onChange={handleChange}
      />
      <TextP>Renters will read this first, so highlight any features or important information the apartment has.</TextP>
      <PhotosInput/>
      <Button type="primary" size="lg" >Publish property listing </Button>
    </WrapperForm>
  );
};

export default Form;