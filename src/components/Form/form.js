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
  const [operationType, setOperationType] = useState("rent");
  const [formData, setFormData] = useState({
    address: "",
    price: "",
    maintanance: null,
    property_type:"",
    pets:false,
    about:"",
    bedrooms: "",
    bathrooms:"",
    area:""
  });

  const {
    address,
    price,
    maintanance,
    property_type,
    pets,
    about,
    bedrooms,
    bathrooms,
    area
  } = formData;

  function handleChange(event) {
    let { name, value } = event.target;
    if (event.target.type=== "checkbox") {
      name = "pets";
      value = event.target.checked;
    }else if (event.target.type === "radio") {
      name = "property_type";
      value = event.target.id ==="aparment"? 0:1;
    }
    setFormData({...formData,[name]: value});
  };

  function handleSubmit(event) {
    event.preventDefault();
    formData.area = parseInt(formData.area);
    formData.bedrooms = parseInt(formData.bedrooms);
    formData.bathrooms = parseInt(formData.bathrooms);
    formData.price = parseInt(formData.price);
    formData.maintanance = !!formData.maintanance ? parseInt(formData.maintanance): null;
    formData.operation_type = operationType ==="rent" ? 0: 1;
    console.log(formData);
    // login(formData)
  }

  return(
    <WrapperForm onSubmit={handleSubmit}>
      <TitlePage>{title}</TitlePage>
      <SwitchOperation operationType= {operationType} setOperationType={setOperationType} />
      <Input
        label="address"
        id="address"
        size="lg"
        IconL={BiSearch}
        placeholder="start typing to autocomplete"
        value={address}
        onChange={handleChange}
        required
      />
      {operationType=== "rent"?  <>
      <Input
        type= "number"
        label="montly rent"
        id="price"
        size="sm"
        IconL={RiMoneyDollarCircleLine}
        placeholder="2000"
        value={price}
        onChange={handleChange}
        required
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
        required
      />  </> :
      <Input
        type= "number"
        label="price"
        id="price"
        size="sm"
        IconL={RiMoneyDollarCircleLine}
        placeholder="2000"
        value={price}
        onChange={handleChange}
        required
      />}
      <LikeLabel>Property Type</LikeLabel>
      <ContainerRadio>
        <Radio
          id="aparment"
          children="Aparment"
          value={property_type}
          name="property_type"
          onChange={handleChange}
          required
        />
        <Radio
          id="house"
          children="House"
          value={property_type}
          name="property_type"
          onChange={handleChange}
          required
        />
      </ContainerRadio>
      <ContainerRadio>
        <Input
          type= "number"
          label="bedrooms"
          id="bedrooms"
          size="x-sm"
          placeholder="select"
          value={bedrooms}
          onChange={handleChange}
          required
        />
        <Input
          type= "number"
          label="bathrooms"
          id="bathrooms"
          size="x-sm"
          placeholder="select"
          value={bathrooms}
          onChange={handleChange}
          required
        />
        <Input
          type= "number"
          label="Area in m2"
          id="area"
          size="x-sm"
          placeholder="select"
          value={area}
          onChange={handleChange}
          required
        />
      </ContainerRadio>
      <Checkbox 
        children="Pets Allowed"
        value={pets}
        name="pets"
        onChange={handleChange}
      />
      <TextP>Allowing pets increases the likehood of renters  liking the property by 9001%.
It also makes you a better person.</TextP>
      <Input
        label="About this property"
        id="about"
        size="other"
        placeholder="My apartment is great because..."
        value={about}
        onChange={handleChange}
        required
      />
      <TextP>Renters will read this first, so highlight any features or important information the apartment has.</TextP>
      <PhotosInput/>
      <Button type="primary" size="lg" >Publish property listing </Button>
    </WrapperForm>
  );
};

export default Form;