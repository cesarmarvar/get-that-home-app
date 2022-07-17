import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
import { HiOutlineUpload } from "react-icons/hi";
import { useEffect, useState } from "react";

const WrapperPhotos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputFile = styled.input`
  appereance: none;
  position: absolute;
  opacity: 0;
`

const File = styled.div`
  position: relative;
  background-color: ${colors.pink.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 134px;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 0.5rem;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`
const LikeLabel = styled.label`
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
  max-width: 670px;
  height: 136px;
  background-color: ${colors.background.regular};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`
const NonPhoto = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${colors.background.dark};
  border-radius: 0.5rem;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  font-size: 14px;
  justify-content: center;
`
const Photo = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function PhotosInput() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images, setImages] = useState([]);

  function onSelectFile(e) {
    const selectedFiles = e.target.files;
    setSelectedFiles(files => ([...files, ...selectedFiles]));
  }

  useEffect(() => {
    setImages(() => (
      selectedFiles.map(file => (URL.createObjectURL(file)))
    ));
  }, [selectedFiles]);

  return(
    <WrapperPhotos>
      <WrapperTop>
        <Title>Photos</Title>
        <ContainerInput>
          <LikeLabel>Upload as many photos as you wish</LikeLabel>
          <FlexRow>
            <File htmlFor="photos">
              <HiOutlineUpload />
              <InputFile
                type="file"
                name="photos"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg , image/jpg"
              />
              <p>Choose File</p>
            </File>
            {
              selectedFiles.length <= 0
              ?
              <LikeLabel htmlFor="photos">No File Chosen</LikeLabel>
              :
              <LikeLabel htmlFor="photos">{selectedFiles.length} selected</LikeLabel>
            }
          </FlexRow>
          <TextP>Only images, max 5MB</TextP>
        </ContainerInput>
      </WrapperTop>
      <ContainerPhotos>
        {
          selectedFiles.length <= 0
          ?
          <NonPhoto>
            <p>No photos yet</p>
          </NonPhoto>
          :
          images.map((img, index) => (
            <Photo
              src={img}
              alt="preview-image"
              key={index}
            />
          ))
        }
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

function SwitchOperation({operationType, setOperationType}) {
  
  return (
    <WrapperSwitch>
      <LikeLabel>Operation Type</LikeLabel>
      <div style={{
        display: "flex",
      }}>
        <OneOption style={{
            borderRight: "none",
            borderRadius: "8px 0px 0px 8px",
            backgroundColor: operationType === "rent"? "pink": "white",
            color: operationType=== "rent"? "white": "black"
        }}
        onClick={()=>setOperationType("rent")}
        >Rent</OneOption>
        <OneOption style={{
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: operationType === "sale"? "pink": "white",
            color: operationType=== "sale"? "white": "black"
        }}
        onClick={()=>setOperationType("sale")}
        >Sale</OneOption>
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