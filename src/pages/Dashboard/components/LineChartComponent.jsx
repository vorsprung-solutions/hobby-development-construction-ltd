import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = ({ employee, construction, branch, interior }) => {
  const data = [
    { name: "Employee", value: employee },
    { name: "Branches", value: branch },
    { name: "Construction Projects", value: construction - interior },
    { name: "Interior Projects", value: interior },
  ];

  return (
    <ResponsiveContainer width="95%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" type="category" allowDuplicatedCategory={false} />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          animationDuration={2000}
          animationEasing="ease-in-out"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
