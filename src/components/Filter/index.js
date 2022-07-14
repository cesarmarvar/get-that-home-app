import { useState } from "react";
import Input from "../Input/input";
import * as Style from "./styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Button from "../Button";

const data = {
  price: {
    name: "PRICE",
    func:  ByPrice
  },
  type: {
    name: "PROPERTY TYPE",
    func: ByType
  },
  nums: {
    name: "BEDS & BATHS",
    func: ByBedsAndBaths
  },
  more: {
    name: "MORE",
    func: ByMore
  }
}

function Filter({ type, filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Style.Container>
      <Style.Button
        onClick={() => setIsOpen(!isOpen)}
      >
        { data[type].name }
      </Style.Button>
      {
        isOpen
        ?
        <>
          <Style.Card>
            { data[type].func(setFilters, setIsOpen) }
          </Style.Card>
          <Style.DataFilters>
          {filters[type].map(filter => {
            let message;
            if(type === "price") {
              if(filter.from === 0) message = `<= $${filter.to}`;
              if(filter.to === 0) message = `>= $${filter.from}`;
              if(filter.to > 0 && filter.from > 0) message = `$${filter.from} - $${filter.to}`;
            }else if(type === "type") {
              message = filter.name
            }else if(type === "nums") {
              message = `${filter.beds}+ BD, ${filter.baths}+ BA`;
            }
            return <Style.Button>{ message }</Style.Button>
          })}
          </Style.DataFilters>
        </>
        :
        null
      }
    </Style.Container>
  );
}

function ByPrice(setFilters) {
  function handleSubmit(e){
    e.preventDefault();
    const { from, to } = e.target;
    if(from.value === "" && to.value === "") return;
    setFilters(filters => {
    let valid = true;
    filters.price.forEach(fil => {
      if(fil.from === from.value && fil.to === to.value) return valid = false;
      valid = true;
    })

    if(valid) {
      return {
        ...filters, price: [...filters.price, {from: from.value || 0, to: to.value || 0}]
      }
    }else {
      return filters;
    }
  });
  }

  return (
    <Style.Form onSubmit={handleSubmit}>
      <Style.Section>
        <Input 
          id="from"
          placeholder="min"
          type="number"
          IconL={RiMoneyDollarCircleFill}
        />
        -
        <Input 
          id="to"
          placeholder="min"
          type="number"
          IconL={RiMoneyDollarCircleFill}
        />
      </Style.Section>
      <Button>DONE</Button>
    </Style.Form>
  );
}

function ByType() {
  return (
    <p>Hola</p>
  );
}

function ByBedsAndBaths() {
  return (
    <p>Hola</p>
  );
}

function ByMore() {
  return (
    <p>Hola</p>
  );
}

export default Filter;
