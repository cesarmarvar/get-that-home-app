import styled from "@emotion/styled";
import { useState } from "react";
// import { useProperties } from "../../context/property-context";
// import Button from "../Button/button";


function Pagination({ array, setCurrentPage }) {
  const pages = array?.length;
  const [styleButtonnClick, setStyleButtonClick ] = useState(false)
  
  const Button = styled.button`
    background: ${ styleButtonnClick ? "rgba(244, 143, 177, 0.15);" : "#FFFFFF;" }
    border: ${ styleButtonnClick ? "1px solid #BF5F82;" : "1px solid rgba(97, 97, 97, 0.15);" }
    // border: 1px solid #BF5F82;
    // border: 1px solid rgba(97, 97, 97, 0.15);
    // background: #FFFFFF;
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
        <Button onClick={() => setCurrentPage(first)}>{ first }</Button>
        { pages <= first ? null : <Button onClick={() => {
          setCurrentPage(second);
          setStyleButtonClick(true);
          console.log("click en 2")
        }}>{ second }</Button> }
        { pages <= second ? null : <Button  onClick={() => setCurrentPage(third)}>{ third }</Button> }
        { pages <= third ? null : <Button onClick={() => setCurrentPage(fourth)}>{ fourth }</Button> }
        { pages <= fourth ? null : <Button onClick={() => setCurrentPage(fifth)}>{ fifth }</Button> }
        { fifth < pages ? <Button style={{border: "none"}} onClick={handlerNext} >${">"}</Button> : null }
      </div>
    )
  }

  return (
    <Buttons />
  )
}

export default Pagination;