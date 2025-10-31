import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExpenseTable from "./ExpenseTable";
import IncomeTable from "./IncomeTable";

const IncomeExpense = ({ employeeIncome, employeeExpense }) => {
  const getTotalIncome = () => {
    let totalIncome = 0;
    employeeIncome?.map((item) => {
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
    employeeExpense?.map((item) => {
      let sum = 0;
      const amount = item?.expense?.map((i) => {
        sum += i?.amount;
      });
      totalExpense += sum;
    });
    return totalExpense;
  };
  return (
    <div className="my-12 lg:mx-20">
      <div className=" ">
        <Tabs className="mx-auto items-center">
          <TabList>
            <Tab>Income</Tab>
            <Tab>Expense</Tab>
          </TabList>

          <TabPanel>
            <IncomeTable
              employeeIncome={employeeIncome}
              getTotalIncome={getTotalIncome}
            />
          </TabPanel>
          <TabPanel>
            <ExpenseTable
              employeeExpense={employeeExpense}
              getTotalExponse={getTotalExponse}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default IncomeExpense;
