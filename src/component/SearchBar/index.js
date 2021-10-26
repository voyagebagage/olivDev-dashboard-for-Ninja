import { Search } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { listClients } from "../../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import { useClient, useFetch } from "../../context/Provider";
//#################################################
//           COMPONENT
//################################################
const SearchBar = () => {
  let history = useHistory();
  const { setClients, setClientDetails, filteredResults, setFilteredResults } =
    useClient();
  const { isLoading, setIsLoading } = useFetch();
  const initialState = { isLoading: false, results: [], value: "" };

  const [search, setSearch] = useState(initialState);
  // const [filteredResults, setFilteredResults] = useState([]);
  // const searchValueSize = search.value.length || 0;
  // const [searchInputText, setSearchInputText] = useState("")

  const fetchResults = async () => {
    try {
      if (search.value.length > 2) {
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
            // limit: limit,
          })
        );
        // }
        setFilteredResults(filteredRes.data.listClients.items);
        setSearch({
          results: filteredRes.data.listClients.items.map((result, idx) => {
            return {
              //these are ONLY to display Suggestions
              title: `${result.firstName}     ${result.lastName}`,
              description: result.email,
              // image: result.lastName, could add one in the future
              price: result.companyName,
              key: result.id,
              //and these to setClientDetails, when go to the detail page
              id: result.id,
              firstName: result.firstName,
              lastName: result.lastName,
              companyName: result.companyName,
              campaigns: result.campaigns,
              email: result.email,
              phone: result.phone,
              website: result.website,
              country: result.country,
              createdAt: result.createdAt,
              notes: result.notes,
              updatedAt: result.updatedAt,
            };
          }),
          isLoading: false,
        });
        console.log(filteredRes.data.listClients.items, "filteredRes-IN");
      }
      console.log(search.results, "search.results");
      // console.log(filteredRes.data.listClients.items, "filteredRes-OUT");
    } catch (error) {
      console.log("error with list clients :", error);
    }
  };
  useEffect(() => fetchResults(), [search.value]);
  //#################################################
  //           handleResultSelect
  //################################################
  const handleResultSelect = (e, { result }) => {
    console.log(result, "handleRESssss");
    setSearch({ value: `${result.firstName} ${result.lastName}` });
    setClientDetails(result);
    history.push(`/client/${result.firstName}`);
    setTimeout(() => {
      setSearch(initialState);
    }, 1500);
  };
  //#################################################
  //           handleSearchChange
  //################################################
  const handleSearchChange = (e, { value }) => {
    setSearch({ isLoading: true, value: value });
    if (value.length < 2) {
      setSearch({ isLoading: false });
      setFilteredResults([]);
    }
  };
  //#################################################
  //           handleKeyPress
  //################################################
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setClients(filteredResults);
      setIsLoading(false);
    }
  };
  //#################################################
  //           RENDER
  //################################################
  return (
    <>
      <Search
        icon="search"
        placeholder="Search..."
        style={{ borderRadius: "50%" }}
        loading={search.isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        results={search.results}
        value={search.value}
      />
    </>
  );
};

export default SearchBar;
