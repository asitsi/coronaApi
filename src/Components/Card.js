import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Card = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const check = axios.get("https://api.covid19api.com/summary");
    setData((await check).data.Countries[77]);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div classname="py-md-5 py-4">
      <h1 className="Heading">🔴LIVE</h1>
      <h1 className="text-center">
        <span className="bold">India</span> Covid-19 Dashboard :
      </h1>
      <ul className="py-3">
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR </span> COUNTRY
              </p>
              <p className="card_total card_small">{data.Country}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>New Confirmed </span> Deaths
              </p>
              <p className="card_total card_small">{data.NewDeaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> confirmed
              </p>
              <p className="card_total card_small">{data.TotalConfirmed}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> deaths
              </p>
              <p className="card_total card_small">{data.TotalDeaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total</span> active
              </p>
              <p className="card_total card_small">{data.NewConfirmed}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> updated
              </p>
              <p className="card_total card_small">{new Date(data.Date).toDateString()}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
