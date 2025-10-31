import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectIncomeTable from "./ProjectIncomeTable";
import ProjectExpenseTable from "./PRojectExpenseTable";
import { Tooltip } from "react-tooltip";
const ProjectIncomeExpense = ({ projectIncome, projectExpense }) => {
  return (
    <div className="my-12 lg:mx-20">
      <div className=" ">
        <Tabs className="mx-auto items-center">
          <TabList>
            <Tab>Income</Tab>
            <Tab>Expense</Tab>
          </TabList>

          <TabPanel>
            <ProjectIncomeTable projectIncome={projectIncome} />
          </TabPanel>
          <TabPanel>
            <ProjectExpenseTable projectExpense={projectExpense} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectIncomeExpense;
