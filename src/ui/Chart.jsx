/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Chart({ data }) {
  return (
    <>
      <LineChart
        margin={{ right: 15, left: 15 }}
        width={500}
        height={250}
        data={data}
      >
        <Tooltip />
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis width={15} tick={{ fontSize: 12 }} />
        <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
        <Line type="monotone" dataKey="diastolic" stroke="#8884d8" />
      </LineChart>
    </>
  );
}

export default Chart;
