import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const StateWiseData = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res= axios.get("https://data.covid19india.org/data.json");
    setData((await res).data.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="mb-5">
          <h1 className="text-center">
            <span>India State-Wise</span> Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> recovered </th>
                <th> deaths </th>
                <th> active </th>
                <th> updated </th>
              </tr>
            </thead>
            <tbody>
              {data.map((currentElement, index) => {
                return (
                  <tr key={index}>
                    <th> {currentElement.state} </th>
                    <td> {currentElement.confirmed} </td>
                    <td> {currentElement.recovered} </td>
                    <td> {currentElement.deaths} </td>
                    <td> {currentElement.active} </td>
                    <td> {currentElement.lastupdatedtime} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StateWiseData;
