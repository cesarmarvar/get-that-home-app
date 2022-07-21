import Input from "../components/Input/input";
import { BsSearch } from "react-icons/bs";
import { CardsContainer, Container, Filters, FilterSection } from "./ui";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import { useProperties } from "../context/property-context";
import { PropertyCard } from "../components/Card/card";
import Pagination from "../components/pagination/pagination";

function PropertiesPage() {
  const { properties, searchByAddress } = useProperties();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProps, setCurrentProps] = useState(properties[currentPage]);
  const [search, setSearch] = useState({
    isSearching: false,
    query: ""
  });

  const [filters, setFilters] = useState({
    price: [],
    type: [],
    nums: [],
    more: []
  });

  const { query } = search;

  function handleQuery(e) {
    setSearch({...search, query: e.target.value});
  }

  useEffect(() => {
    const isSearching = query !== "";
    setSearch({ query: query, isSearching: isSearching });
    if(isSearching){
      setCurrentProps(searchByAddress(query));
    }else {
      setCurrentProps(properties[currentPage]);
    }
  }, [properties, query, currentPage, searchByAddress]);

  return (
    <Container>
      <Filters>
        <Input 
          id="address"
          placeholder="Search by address"
          type="text"
          IconL={BsSearch}
          value={query}
          onChange={handleQuery}
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
      <CardsContainer>
        { currentProps?.map((prop, index) => (
            <PropertyCard
              key={index}
              user="homeseeker"
              data={prop}
            />
        )) }
      <Pagination 
        array={Object.keys(properties)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </CardsContainer>
    </Container>
  );
}

export default PropertiesPage;
