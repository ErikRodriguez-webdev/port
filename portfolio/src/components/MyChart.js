import React from "react";
import { Doughnut } from "react-chartjs-2";

const MyChart = () => {
  const chartData = {
    labels: ["Ruby", "React", "JS", "Node", "Python", "Html", "Css"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 56],
        backgroundColor: [
          "red",
          "lightblue",
          "lightyellow",
          "lightgreen",
          "purple",
          "orange",
          "blue"
        ],
        borderColor: "grey",
        borderWidth: 2
      }
    ]
  };
  return (
    <div className="chart">
      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Language Familiarity",
            fontSize: 20,
            fontColor: "grey"
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </div>
  );
};

export default MyChart;
