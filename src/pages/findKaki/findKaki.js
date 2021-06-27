import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResultsTable from "./SearchResultsTable";

/* =========TLDR: How this page works=================
1. upon opening page, async fn fetchData is called and displays ALL datapoints as default before any input in search bar is detected
2. upon data change in SearchBar, async fn updateInput is called. 2 things happen:
   i. firstly, the nested method filter() compares json tag "title" in each datapoint with SearchBar input
   ii. settaskList is called and updates taskList results
*/

const FindKaki = (props) => {
  //syntax: [somefield, setterForTheFieldBeforeThisFn] = an instance of useState(); //react-specific "state hook"
  const [input, setInput] = useState("");
  const [taskListDefault, settaskListDefault] = useState();
  const [taskListResults, settaskList] = useState();

  //fetches data for default display upon loading page
  //using native javascript fetch() instead of some jQuery xmlhttpreq(troublesome cuz must config CORS config on API gateway side)
  const fetchData = async () => {
    //sample endpoint: https://restcountries.eu/rest/v2/all. if used, rename all instances of "title" to "name" in proj
    return await fetch("https://api.jsonbin.io/b/60d8080b5ed58625fd1a2491/2") //endpoint with all json strings. depends on backend used. expect array of json strings
      .then((response) => response.json())
      .then((data) => {
        settaskList(data);
        settaskListDefault(data);
        console.log(data);
      });
  };

  //search filer logic
  //retrieves input from SearchBar in "real-time" and filters by "title" tag in json string.
  //Good to ref structure of each datapoint in backend
  const updateInput = async (input) => {
    console.log("data displayed upon refresh:", taskListDefault);
    const filtered = taskListDefault.filter((taskPost) => {
      return taskPost.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    settaskList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Find a Kaki!</h1>
      <h4>Explore new places, play online games, reminisce Singapore...</h4>
      <SearchBar input={input} onChange={updateInput} />
      <SearchResultsTable taskList={taskListResults} />
    </>
  );
};

export default FindKaki;
