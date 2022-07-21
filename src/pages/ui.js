import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 1rem;
`;

export const Main = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Filters = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(97, 97, 97, 0.5);
  z-index: 2;
`;

export const CardsContainer = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;
