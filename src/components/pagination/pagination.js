import { useState } from "react";
import Button from "../Button/button";

function Pagination(array) {

  const pages = array.size;

  const [displayButtons, setDisplayButtons] = useState({
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
  })
  // const [back, setBack] = useState(null);
  // const [next, setNext] = useState(null);

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
        <Button>{ first }</Button>
        <Button>{ second }</Button>
        <Button>{ third }</Button>
        <Button>{ fourth }</Button>
        <Button>{ fifth }</Button>
        <Button onClick={handlerNext} >Next</Button>
      </div>
    )
  }

  return (
    <Buttons />
  )
}

export default Pagination;