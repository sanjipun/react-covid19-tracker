import Axios from "axios";
import React, { useEffect, useState } from "react";
import CovidCard from "./covidCard";
import "./styles.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import covid from "./Assets/covid.png";

export default function App() {
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://corona.lmao.ninja/v2/countries/Nepal?yesterday&strict&query%20"
    );
    setResult(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(result);
  const cases = [
    {
      case: result.active,
      name: "Active Cases",
      color: "#665CA3",
      icon: covid,
      i: false
    },
    {
      case: result.deaths,
      name: "Total Deaths",
      color: "#E7223B",
      icon: "far fa-frown",
      i: true
    },
    {
      case: result.cases,
      name: "Total Cases",
      color: "#F02F84",
      icon: covid,
      i: false
    },
    {
      case: result.recovered,
      name: "Total Recovered",
      color: "#00703D",
      icon: "far fa-smile",
      i: true
    },

    {
      case: result.todayCases,
      name: "Cases Today",
      color: "#665CA3",
      icon: covid,
      i: false
    },
    {
      case: result.todayRecovered,
      name: "Recovered Today",
      color: "#00703D",
      icon: "far fa-smile",
      i: true
    },
    {
      case: result.todayDeaths,
      name: "Deaths Today",
      color: "#E7223B",
      icon: "far fa-frown",
      i: true
    },

    {
      case: result.tests,
      name: "Total Tests",
      color: "#665CA3",
      icon: covid,
      i: false
    }
  ];
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#012e67",
          color: "white",
          padding: 30
        }}
      >
        Covid Tracker ({result.country})
      </h1>
      <Row
        gutter={[16, 16]}
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {cases.map((single, i) => {
          return (
            <Col
              key={i}
              span={6}
              style={{
                maxHeight: "500px",
                width: "auto"
              }}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
            >
              <CovidCard single={single} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
