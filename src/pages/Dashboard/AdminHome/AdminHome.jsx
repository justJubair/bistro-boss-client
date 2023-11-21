/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Shared/Container/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { FaTruck } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,  PieChart, Pie, Legend } from "recharts";
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // customize shape for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

//   customize shape for bar chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    const piechartData = chartData.map(data=> {
        return {name: data?.category, value: data?.revenue}
    })

  return (
    <Container>
      <h2 className="text-2xl font-bold my-6">
        {" "}
        HELLO, welcome back <span>{user?.displayName}</span>{" "}
      </h2>

      {/* main container */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* State ONE */}
        <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <IoWallet size={50} />
          <div className="font-bold ml-4 text-center">
            <h3 className="text-2xl">{stats?.revenue}</h3>
            <p className="text-xl">Revenue</p>
          </div>
        </div>
        {/* State Two */}
        <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <FaUsers size={50} />
          <div className="font-bold ml-4 text-center">
            <h3 className="text-2xl">{stats?.users}</h3>
            <p className="text-xl">Users</p>
          </div>
        </div>
        {/* State Three */}
        <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <SiCodechef size={50} />
          <div className="font-bold ml-4 text-center">
            <h3 className="text-2xl">{stats?.menus}</h3>
            <p className="text-xl">Menus</p>
          </div>
        </div>
        {/* State ONE */}
        <div className="flex items-center rounded-lg p-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          <FaTruck size={50} />
          <div className="font-bold ml-4 text-center">
            <h3 className="text-2xl">{stats?.payments}</h3>
            <p className="text-xl">Orders</p>
          </div>
        </div>
      </div>

      {/* chart container */}
      <div className="flex">
        {/* Barchart */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
        <PieChart width={400} height={400}>
          <Pie
            data={piechartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {piechartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        <Legend></Legend>
        </PieChart>

        </div>
      </div>
    </Container>
  );
};
export default AdminHome;
