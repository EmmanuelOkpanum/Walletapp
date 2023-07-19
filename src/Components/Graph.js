import React, { useState, useEffect } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "aos/dist/aos.css";
import AOS from "aos";

const Graph = () => {
  const [activeTab, setActiveTab] = useState("day");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const dayData = [
    {
      name: "Monday 1st",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday 2nd",
      uv: 3000,
      pv: 1098,
      amt: 2110,
    },
    {
      name: "Wednesday 3rd",
      uv: 2900,
      pv: 9200,
      amt: 2250,
    },
    {
      name: "Thursday 4th",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Friday 5th",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: " Saturday 6th ",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sunday 7th",
      uv: 3490,
      pv: 4000,
      amt: 2100,
    },
  ]; // Data for day graph
  const weekData = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ]; // Data for week graph
  const monthData = [
    {
      name: "January",
      uv: 7000,
      pv: 2400,
      amt: 3400,
    },
    {
      name: "February",
      uv: 1000,
      pv: 1998,
      amt: 2910,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2080,
      pv: 4908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4900,
      amt: 2981,
    },
    {
      name: "June",
      uv: 2990,
      pv: 5800,
      amt: 2900,
    },
    {
      name: "July",
      uv: 9490,
      pv: 2300,
      amt: 2600,
    },
  ]; // Data for month graph
  const yearData = [
    {
      name: "2017",
      uv: 1000,
      pv: 7000,
      amt: 2400,
    },
    {
      name: "2018",
      uv: 3000,
      pv: 1498,
      amt: 2210,
    },
    {
      name: "2019",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2020",
      uv: 2980,
      pv: 3908,
      amt: 6000,
    },
    {
      name: "2021",
      uv: 2890,
      pv: 6800,
      amt: 2981,
    },
    {
      name: "2022",
      uv: 2390,
      pv: 5800,
      amt: 9500,
    },
    {
      name: "2023",
      uv: 9490,
      pv: 5300,
      amt: 7100,
    },
  ]; // Data for year graph

  return (
    <>
      <div className="graph">
        <div className="graph-container">
          <div className="calender">
            <ul>
              <li
                className={activeTab === "day" ? "active-tab" : ""}
                onClick={() => handleTabClick("day")}
              >
                {" "}
                Day{" "}
              </li>
              <li
                className={activeTab === "week" ? "active-tab" : ""}
                onClick={() => handleTabClick("week")}
              >
                Week{" "}
              </li>
              <li
                className={activeTab === "month" ? "active-tab" : ""}
                onClick={() => handleTabClick("month")}
              >
                Month{" "}
              </li>
              <li
                className={activeTab === "year" ? "active-tab" : ""}
                onClick={() => handleTabClick("year")}
              >
                Year
              </li>
            </ul>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="graph-details"
          >
            <div className="details-length">
              <div className="length">
                <div className="low-color"> </div>
                <p> Lower: $4.895 </p>
              </div>

              <div className="length">
                <div className="high-color"> </div>
                <p> Higher: $6.857 </p>
              </div>
            </div>

            <div className="main-graph">
              {activeTab === "day" && (
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart
                      data={dayData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === "week" && (
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart
                      data={weekData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === "month" && (
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart
                      data={monthData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === "year" && (
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart
                      data={yearData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            <div className="crypt">
              <div className="crypt-color"> </div>
              <p> 1BTC = $5.483 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
