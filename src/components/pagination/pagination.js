import { useState } from "react";
import Button from "../Button/button";

function Pagination({ array, setCurrentPage }) {

  const pages = array.length;

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
      <div style={{display: "flex"}}>
        { first !== 1 ? <Button onClick={handlerPrev} >Prev</Button> : null }
        <Button onClick={() => setCurrentPage(first)}>{ first }</Button>
        { pages <= first ? null : <Button onClick={() => setCurrentPage(second)}>{ second }</Button> }
        { pages <= second ? null : <Button onClick={() => setCurrentPage(third)}>{ third }</Button> }
        { pages <= third ? null : <Button onClick={() => setCurrentPage(fourth)}>{ fourth }</Button> }
        { pages <= fourth ? null : <Button onClick={() => setCurrentPage(fifth)}>{ fifth }</Button> }
        { fifth < pages ? <Button onClick={handlerNext} >Next</Button> : null }
      </div>
    )
  }

  return (
    <Buttons />
  )
}

export default Pagination;