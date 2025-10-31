import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d"];

const PieChartComponent = ({ income, expense }) => {
  const getTotalIncome = () => {
    let totalIncome = 0;
    income?.data?.map((item) => {
      let sum = 0;
      const amount = item?.income?.map((i) => {
        sum += i?.amount;
      });
      totalIncome += sum;
    });
    return totalIncome;
  };

  const getTotalExponse = () => {
    let totalExpense = 0;
    expense?.data?.map((item) => {
      let sum = 0;
      const amount = item?.expense?.map((i) => {
        sum += i?.amount;
      });
      totalExpense += sum;
    });
    return totalExpense;
  };
  const data = [
    { name: "Income", value: getTotalIncome() },
    { name: "Expense", value: getTotalExponse() },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
