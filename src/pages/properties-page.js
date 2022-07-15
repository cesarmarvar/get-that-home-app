import Input from "../components/Input/input";
import { BsSearch } from "react-icons/bs";
import { Container, Filters, FilterSection } from "./ui";
import Filter from "../components/Filter";
import { useState } from "react";

function PropertiesPage() {
  const [filters, setFilters] = useState({
    price: [],
    type: [],
    nums: [],
    more: []
  })

  return (
    <Container>
      <Filters>
        <Input 
          id="address"
          placeholder="Search by address"
          type="text"
          IconL={BsSearch}
        />
        <FilterSection>
          <Filter
            filters={filters}
            setFilters={setFilters}
            type="price"
          />
          <Filter
            filters={filters}
            setFilters={setFilters}
            type="type"
          />
          <Filter
            filters={filters}
            setFilters={setFilters}
            type="nums"
          />
          <Filter
            filters={filters}
            setFilters={setFilters}
            type="more"
          />
        </FilterSection>
        <Input />
      </Filters>
    </Container>
  );
}

export default PropertiesPage;
