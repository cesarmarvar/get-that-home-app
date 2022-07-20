import styled from "@emotion/styled";
import { useState } from "react";
// import { useProperties } from "../../context/property-context";
// import Button from "../Button/button";


function Pagination({ array, setCurrentPage, currentPage }) {
  const pages = array?.length; 

  const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
  `

  const [displayButtons, setDisplayButtons] = useState({
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
  })

  const { first, second, third, fourth, fifth, } = displayButtons

  function setColor( value) {
    const style = {
      backgroundColor:  currentPage === value ? "rgba(244, 143, 177, 0.15)" : "#FFFFFF",
      border: currentPage === value ? "1px solid #BF5F82" : "1px solid rgba(97, 97, 97, 0.15)"
    }; 
    console.log(value);
    console.log(currentPage);
    return style;    
  }

  function handlerNext() {
    setDisplayButtons({
      first: first + 5,
      second: second + 5,
      third: third + 5,
      fourth: fourth + 5,
      fifth: fifth + 5
    })
  }

  function handlerPrev() {
    setDisplayButtons({
      first: first - 5,
      second: second - 5,
      third: third - 5,
      fourth: fourth - 5,
      fifth: fifth - 5
    })
  }

  function Buttons() {
    return (
      <div style={{display: "flex", gap: "0.5rem", margin: "2rem auto"}}>
        { first !== 1 ? <Button style={{border: "none"}} onClick={handlerPrev} >${"<"}</Button> : null }
        <Button style={setColor(first)} onClick={() => setCurrentPage(first)}>{ first }</Button>
        { pages <= first ? null : <Button style={setColor(second)} onClick={() => setCurrentPage(second)}>{ second }</Button> }
        { pages <= second ? null : <Button style={setColor(third)} onClick={() => setCurrentPage(third)}>{ third }</Button> }
        { pages <= third ? null : <Button style={setColor(fourth)} onClick={() => setCurrentPage(fourth)}>{ fourth }</Button> }
        { pages <= fourth ? null : <Button style={setColor(fifth)} onClick={() => setCurrentPage(fifth)}>{ fifth }</Button> }
        { fifth < pages ? <Button style={{border: "none"}} onClick={handlerNext} >${">"}</Button> : null }
      </div>
    )
  }

  return (
    <Buttons />
  )
}

export default Pagination;