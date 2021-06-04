import React, { useState, useEffect } from "react";
import "../App.css";

const Card = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const value = await res.json();
    setData(value.statewise[0]);
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
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> recovered
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> confirmed
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
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
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total</span> active
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>total </span> updated
              </p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
