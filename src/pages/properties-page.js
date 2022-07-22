import Input from "../components/Input/input";
import { BsSearch } from "react-icons/bs";
import { CardsContainer, Container, Filters, FilterSection } from "./ui";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import { useProperties } from "../context/property-context";
import { PropertyCard } from "../components/Card/card";
import Pagination from "../components/pagination/pagination";
import MultiSelect from "../components/MultiSelect";

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
    more: [],
    contract: null,
    isFiltering: false
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

  // function handleFilters(){
  //   const allProperties = []
  //   console.log("here!")
  //   Object.values(properties).forEach(prop => {
  //     allProperties.push(...prop);
  //   });
  //   if(!filters.contract) {
  //     setFilters(filters => {
  //       return {...filters, isFiltering: false}
  //     });
  //     setCurrentProps(properties[1]);
  //     return;
  //   }
  //   const newProps = filters.contract ? allProperties.filter(prop => prop.operation_type === filters.contract) : allProperties;
  //   setCurrentProps(newProps);
  //   setFilters(filters => {
  //     return {...filters, isFiltering: true}
  //   });
  // }

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
        <MultiSelect
          setFilters={setFilters}
          type="contract"
          withBorder
          isMulti={false}
          options={[
            {value: "sale", label: "Buying"},
            {value: "rent", label: "Renting"}
          ]}
        />
      </Filters>
      <CardsContainer>
        { currentProps?.map((prop, index) => (
            <PropertyCard
              key={index}
              user="buyer"
              data={prop}
            />
        )) }
      {
        !filters.isFiltering
        ?
        <Pagination 
          array={Object.keys(properties)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        :
        null
      }
      </CardsContainer>
    </Container>
  );
}

export default PropertiesPage;
