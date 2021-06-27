import React from "react";

const SearchResultsTable = ({ taskList = [] }) => {
  // console.log(
  //   "raw data passed to SearchResultsTable for generation of html elements",
  //   taskList
  // );
  return (
    <>
      {taskList.map((data, index) => {
        //turning on this debug message will flood console. only use to verify each datapoint retrieved from db is formatted properly as a json string.
        //console.log("check if data is 1 datapoint in restaurantList received from SearchPage fns:", data);
        if (data) {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>Description: {data.description}</p>
              <p>
                Hours: {data.hours} <button>❤️</button>
              </p>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchResultsTable;
