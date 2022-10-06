/* eslint-disable no-unused-vars */
/**
=========================================================
 * Argon Dashboard 2 MUI - v3.0.0
=========================================================

 * Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardContent } from "@mui/material";


// Argon Dashboard 2 MUI components

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";

import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

function Default() {
  const [s1, sets1] = useState(null);
  const [s2, sets2] = useState(null);
  const [s3, sets3] = useState(null);
  const [s4, sets4] = useState(null);
  const [onFlag, setonFlag] = useState(null);
  const [chartData, setChartData] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const [chartData4, setChartData4] = useState({});
  const [isOn, setIsOn] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://api.thingspeak.com/channels/1848245/fields/1.json?api_key=4WIAERB6XNBCAE3X&results=30"
      )
      .then((response) => {
        axios
          .get(
            "https://api.thingspeak.com/channels/1848245/fields/2.json?api_key=4WIAERB6XNBCAE3X&results=30"
          )
          .then((res) => {
            const labels = [];
            const data = [];
            const data2 = [];
            const labels2 = [];
            const data3 = [];
            const labels3 = [];
            response.data.feeds.map((val) => {
              labels.push(val.field1);
              data.push(val.field1);

            });
            res.data.feeds.map((val) => {
              data2.push(val.field2);
              labels2.push(val.field2);
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            setChartData2({
              labels: labels2,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data2,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                // make beginAtZero = true to start chart from 0
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });
          });

        axios
          .get(
            "https://api.thingspeak.com/channels/1848245/fields/3.json?api_key=4WIAERB6XNBCAE3X&results=30"
          )
          .then((res) => {
            const labels = [];
            const data = [];
            const data2 = [];
            const labels2 = [];
            const data3 = [];
            const labels3 = [];
            response.data.feeds.map((val) => {
              labels.push(val.field1);
              data.push(val.field1);

            });
            res.data.feeds.map((val) => {
              data3.push(val.field3);
              labels3.push(val.field3);

            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });

            setChartData3({
              labels: labels3,
              datasets: [
                {
                  label: "Distance",
                  color: "info",
                  data: data3,
                },
              ],

              // set min range of chart as 0 and step size as 500
              options: {
                // make beginAtZero = true to start chart from 0
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 5000,
                    ticks: {
                      stepSize: 500,
                    },
                  },
                },
              },
            });
          });
        axios.get("https://api.thingspeak.com/channels/1848245/fields/4.json?api_key=4WIAERB6XNBCAE3X&results=30")
        .then((res) => {
          const labels = [];
          const data = [];
          const data4 = [];
          const labels2 = [];
          const data3 = [];
          const labels4 = [];
          response.data.feeds.map((val) => {
            labels.push(val.field1);
            data.push(val.field1);

          });
          res.data.feeds.map((val) => {
            data4.push(val.field4);
            labels4.push(val.field4);

          });

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Distance",
                color: "info",
                data: data,
              },
            ],

            // set min range of chart as 0 and step size as 500
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  min: 0,
                  max: 5000,
                  ticks: {
                    stepSize: 500,
                  },
                },
              },
            },
          });

          setChartData4({
            labels: labels4,
            datasets: [
              {
                label: "Distance",
                color: "info",
                data: data4,
              },
            ],

            // set min range of chart as 0 and step size as 500
            options: {
              // make beginAtZero = true to start chart from 0
              scales: {
                y: {
                  beginAtZero: true,
                  min: 0,
                  max: 5000,
                  ticks: {
                    stepSize: 500,
                  },
                },
              },
            },
          });
        }
        );
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1848245/fields/1.json?api_key=4WIAERB6XNBCAE3X&results=1"
      )
      .then((res) => {
        sets1(res.data.feeds[0].field1);
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1848245/fields/2.json?api_key=4WIAERB6XNBCAE3X&results=1"
      )
      .then((res) => {
        sets2(res.data.feeds[0].field2);
      });

    axios
      .get(
        "https://api.thingspeak.com/channels/1848245/fields/3.json?api_key=4WIAERB6XNBCAE3X&results=1"
      )
      .then((res) => {
        sets3(res.data.feeds[0].field3);
      });
    
      axios
      .get(
        "https://api.thingspeak.com/channels/1848245/fields/4.json?api_key=4WIAERB6XNBCAE3X&results=1"
      )
      .then((res) => {
        sets4(res.data.feeds[0].field4);
      });
    
    const config = {
      headers: {
        "X-M2M-Origin": "w961iw:JEhiH5",
        "Content-Type": "application/json",
      },
    }
    // https://esw-onem2m.iiit.ac.in/webpage/welcome/index.html?context=/~&cseId=in-cse
    const uri = "https://esw-onem2m.iiit.ac.in:443/~/in-cse/in-name/Team-16/Node-1/Data/la";

    // axios
    //   .post(uri, config)
    //   .then((res) => {
    //       // setonFlag(res.data);
    //       console.log(res);
    //   });
    
  //   const sendPostRequest = async () => {
  //     try {
  //         const resp = await axios.post(uri, config);
  //         console.log(resp.data);
  //     } catch (err) {
  //         // Handle Error Here
  //         console.error(err);
  //     }
  // };

  // sendPostRequest();

  }, []);

  const onChangeOn = (event) => {
    if (isOn == 1) {
      setIsOn(0)
    }
    else {
      setIsOn(1)
    }
  };

  useEffect(() => {
    console.log(isOn)
    axios.get('https://api.thingspeak.com/update?api_key=QPVP3YPMXCF4WKV6&field1=' + isOn)
      .then(response => {
        console.log("value changed")
        // console.log(response.status)
        // console.log(response.data)
      })
  }, [isOn])

  return (
    <DashboardLayout>
      
          
      <Grid container spacing={4} mb={4}></Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid item xs={12} md={4} lg={3}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 1 - Front "
            count={s1}
            icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
          />
        </Grid>
      
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 2 - Left"
            count={s2}
            icon={{ color: "error", component: <i className="ni ni-world" /> }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="Latest Distance from Sensor 3 -  Right"
            count={s3}
            icon={{ color: "error", component: <i className="ni ni-world" /> }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DetailedStatisticsCard
            title="m2m"
            count={"["+s1+","+s2+","+s3+"]"+","+s4}
            icon={{ color: "error", component: <i className="ni ni-world" /> }}
          />
        </Grid>

      </Grid>
      {/* <Button
            variant="default"
            style={{ color: "black", background: "red" }}
            onClick={onChangeOn}
          >
            {isOn ? '------     Off     ------' : '-----      On      -------'}
      </Button> */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 1 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData}

            // make chart begin at zero
            beginAtZero


          //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 2 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData2}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData2.options}
          //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Ultrasound Sensor 3 Readings"
            // send options to chart
            //options={chartData.options}
            chart={chartData3}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData3.options}
          //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} mb={3}>
        <Grid item xs={20} md={20} lg={20}></Grid>
        <Grid item xs={12} lg={20}>
          <DefaultLineChart
            title="Direction"
            // send options to chart
            //options={chartData.options}
            chart={chartData4}
            // make chart begin at zero
            beginAtZero={true}
            // use options from SetChartData
            options={chartData4.options}
          //options={{ maintainAspectRatio: false }}
          />
        </Grid>
      </Grid> */}
      <Button
            variant="default"
            style={{ color: "black", background: "red" }}
            onClick={onChangeOn}
          >
            {isOn ? '------     Off     ------' : '-----      On      -------'}
      </Button>
      {/* <Grid container spacing={4} mb={4}>
        <button onClick={onChangeOn}>{ isOn ? 'Off' : 'On' }</button>
      </Grid> */}
    </DashboardLayout>
  );
}

export default Default;

{/* <Button
            variant="default"
            style={{ color: "white", background: "red" }}
            onClick={onChangeOn}
          >
            {isOn ? '------Off------' : '-----On-------'}
          </Button>
           */}