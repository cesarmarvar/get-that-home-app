import { useState } from "react";
import Button from "../Button/button";

function Pagination(array) {

  const pages = 6;

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
        { pages <= first ? null : <Button>{ second }</Button> }
        { pages <= second ? null : <Button>{ third }</Button> }
        { pages <= third ? null : <Button>{ fourth }</Button> }
        { pages <= fourth ? null : <Button>{ fifth }</Button> }
        { fifth < pages ? <Button onClick={handlerNext} >Next</Button> : null }
        {/* <Button onClick={handlerNext} >Next</Button> */}
      </div>
    )
  }

  return (
    <Buttons />
  )
}

export default Pagination;