import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const MyChart = () => {
  const chartData = {
    labels: ["Html", "Css", "JS", "React", "Node", "Python", "Ruby"],
    datasets: [
      {
        label: "# 1(Weak) - 5(Strong)",
        data: [5, 5, 3, 4, 4, 1, 0],
        backgroundColor: [
          "orange",
          "blue",
          "yellow",
          "lightblue",
          "lightgreen",
          "purple",
          "red"
        ],
        borderColor: "grey",
        borderWidth: 2
      }
    ]
  };
  return (
    <div className="chart">
      <HorizontalBar
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
