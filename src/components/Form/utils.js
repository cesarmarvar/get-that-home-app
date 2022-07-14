import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const WrapperPhotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputFile = styled.input`
  
`

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`
const LikeLabel = styled.p`
  ${typography.overline};
`
const TextP = styled.p`
  ${typography.caption};
  color: ${colors.gray.light};
`
const Title = styled.h2`
  ${typography.headline.h6};
` 
const ContainerPhotos = styled.div`
  width: 600px;
  height: 136px;
  background-color: ${colors.background.regular};
  display: flex;
  align-items: center;
  padding: 0.5rem;
`
const NonPhoto = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${colors.background.dark};
  border-radius: 0.5rem;
`
const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function PhotosInput() {
  return(
    <WrapperPhotos>
      <WrapperTop>
        <Title>Photos</Title>
        <ContainerInput>
          <LikeLabel>Upload as many photos as you wish</LikeLabel>
          <InputFile  type="file"/>
          <TextP>Only images, max 5MB</TextP>
        </ContainerInput>
      </WrapperTop>
      <ContainerPhotos>
        <NonPhoto>
          <p>No photos yet</p>
        </NonPhoto>
      </ContainerPhotos>
    </WrapperPhotos>
  );
};


const WrapperSwitch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`; 

const OneOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding: 0.5rem;
  border: 1px solid ${colors.gray.regular};
  cursor: pointer;
`

function SwitchOperation() {
  return (
    <WrapperSwitch>
      <LikeLabel>Operation Type</LikeLabel>
      <div style={{
        display: "flex",
      }}>
        <OneOption style={{
            borderRight: "none",
            borderRadius: "8px 0px 0px 8px"
        }}>Rent</OneOption>
        <OneOption style={{
            borderRadius: "0px 8px 8px 0px"
        }}>Sale</OneOption>
      </div>
    </WrapperSwitch>
  );
};

export { 
  PhotosInput,
  SwitchOperation,
  LikeLabel,
  TextP
};