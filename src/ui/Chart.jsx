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
        <Line
          type="monotone"
          dataKey="systolic"
          stroke="#E66FD2"
          strokeWidth={2}
          dot={{ stroke: "#E66FD2", fill: "#E66FD2" }}
        />
        <Line
          type="monotone"
          dataKey="diastolic"
          stroke="#7E6CAB"
          strokeWidth={2}
          dot={{ stroke: "#7E6CAB", fill: "#7E6CAB" }}
        />
      </LineChart>
    </>
  );
}

export default Chart;
