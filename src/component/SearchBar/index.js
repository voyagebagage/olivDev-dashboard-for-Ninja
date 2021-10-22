import { Search } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { listClients } from "../../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
//#################################################
//           COMPONENT
//################################################
const SearchBar = () => {
  const initialState = { isLoading: false, results: [], value: "" };

  const [search, setSearch] = useState(initialState);
  // const searchValueSize = search.value.length || 0;
  // const [searchInputText, setSearchInputText] = useState("")

  const fetchResults = async () => {
    try {
      // if (searchValueSize.length > 1) {
      const results = await API.graphql(
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
      setSearch({
        results: results.data.listClients.items.map(
          (result, idx) =>
            result?.firstName ||
            result?.lastName ||
            result?.companyName ||
            result?.phone ||
            result?.email ||
            result?.website
        ),
      });
      console.log(search, "search.results");

      // console.log(results.data.listClients.items, "results");
      // console.log(search.results, "Sarchresults");
      // console.log(search, "Sarchresults");
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    // console.log(search.value.length, "search.value");
    // if (searchValueSize.length > 1) return
    fetchResults();
  }, [search.value]);
  //##
  //##
  const handleResultSelect = (e, { result }) => {
    console.log(result, "resultRES--------");
    setSearch({ value: result });
  };
  //##
  //##
  const handleSearchChange = (e, { value }) => {
    // console.log(e.target.value, "target");
    console.log(value, "value-----==");
    setSearch({ isLoading: true, value });
    console.log(search);
    // if (search.value.length > 1)
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
        results={search.results}
        value={search.value}
      />
    </>
  );
};

export default SearchBar;
