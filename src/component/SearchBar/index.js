import { Search, Label } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { listClients } from "../../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import { useClient, useFetch } from "../../context/Provider";
//#################################################
//           COMPONENT
//################################################
const SearchBar = () => {
  const { clients, setClients, filteredResults, setFilteredResults } =
    useClient();
  const { isLoading, setIsLoading } = useFetch();
  const initialState = { isLoading: false, results: [], value: "" };

  const [search, setSearch] = useState(initialState);
  // const [filteredResults, setFilteredResults] = useState([]);
  // const searchValueSize = search.value.length || 0;
  // const [searchInputText, setSearchInputText] = useState("")

  const fetchResults = async () => {
    try {
      // if (searchValueSize.length > 1) {
      const filteredRes = await API.graphql(
        graphqlOperation(listClients, {
          filter: {
            or: [
              { firstName: { beginsWith: search.value } },
              { lastName: { beginsWith: search.value } },
              { companyName: { beginsWith: search.value } },
              { phone: { beginsWith: search.value } },
              { email: { beginsWith: search.value } },
              { website: { beginsWith: search.value } },
            ],
          },
        })
      );
      // }
      setFilteredResults(filteredRes.data.listClients.items);
      setSearch({
        results: filteredRes.data.listClients.items.map((result, idx) => {
          // result?.firstName ||
          return {
            title: `${result.firstName}     ${result.lastName}`,
            description: result.email,
            // image: result.lastName,
            price: result.companyName, //result.phone
            key: idx,
          };
        }),
        isLoading: false,
      });

      console.log(search.results, "search.results");
      console.log(filteredRes.data.listClients.items, "filteredRes");
    } catch (error) {
      console.log("error with list clients :", error);
    }
  };
  useEffect(() => {
    // console.log(search.value.length, "search.value");
    // if (searchValueSize.length > 1) return
    fetchResults();
  }, [search.value]);
  //#################################################
  //           handleResultSelect
  //################################################
  const handleResultSelect = (e, { result }) => {
    setSearch({ value: result });
  };
  //#################################################
  //           handleSearchChange
  //################################################
  const handleSearchChange = (e, { value }) => {
    // console.log(e.target.value, "target");
    // console.log(value, "** value-----==", typeof value);
    setSearch({ isLoading: true, value: value });
    // console.log(search, "search CHANGE");
    // console.log(search.results, "search results");
  };
  //#################################################
  //           handleKeyPress
  //################################################
  const handleKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      setClients(filteredResults);
      setIsLoading(false);
      console.log(clients, "CLIENT IN KEYPRESS");
    }
  };
  //#################################################
  //           RENDER
  //################################################
  return (
    <>
      <Search
        // category
        icon="search"
        placeholder="Search..."
        style={{ borderRadius: "50%" }}
        loading={search.isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={handleSearchChange}
        // resultRenderer={resultRenderer}
        // onKeyPress={(event: KeyboardEvent) => {
        //   console.log(event.key);
        // }}
        onKeyPress={handleKeyPress}
        results={search.results}
        value={search.value}
      />
    </>
  );
};

export default SearchBar;
