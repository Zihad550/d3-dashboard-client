import React, { useEffect, useState } from "react";
import Select from "react-select";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  const option = [
    { value: 1, label: "Intensity" },
    { value: 2, label: "Likelihood" },
    { value: 3, label: "Relevance" },
  ];
  /* Intensity
     Likelihood
     Relevance
     Year
     Country
     Topics
     Region
     City 
 */
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);
  return (
    <div>
      <div className="bg-orange-400 p-14">
        <Select options={option} placeholder="filter" />
      </div>

      {/* chart */}
      <Chart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
