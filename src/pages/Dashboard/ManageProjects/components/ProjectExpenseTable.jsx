import { Tooltip } from "react-tooltip";
import { getTotalExponse } from "../../../../utils/calculation";

const ProjectExpenseTable = ({ projectExpense }) => {
  const getSum = (list) => {
    let sum = 0;
    list?.map((expense) => {
      sum += expense?.amount;
    });
    return sum;
  };
  console.log(projectExpense);
  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table ">
          <thead className="bg-blue-800 text-white ">
            <tr className="text-[12px] font-light">
              <th>No</th>
              <th>Date</th>
              {/* { tag == "project" ? <th>Project Name</th> : <th>Employee Name</th>} */}
              <th>Employee</th>
              <th>
                <tr>
                  <td colSpan="4" className="text-center">
                    Expense
                  </td>
                </tr>
                <tr>
                  <td className="px-10">Title</td>
                  <td className="px-8">Amount(TK)</td>
                  <td className="px-10 ">Description</td>
                </tr>
              </th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {projectExpense?.length ? (
              projectExpense?.map((expense, i) => (
                <tr key={i} className="text-[12px] border shadow-lg">
                  <th>{i + 1}</th>
                  <td>{expense?.date}</td>
                  <td>{expense?.userId?.name}</td>
                  <td>
                    {expense?.expense?.map((i, index) => (
                      <tr key={index} className="px-8">
                        <td className="px-4"> {i?.title}</td>
                        <td className="me-4 text-center">{i?.amount}</td>
                        <td>
                          <a
                            className="px-8 text-center"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={i?.description}
                          >
                            {i?.description?.slice(0, 30) + `...`}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </td>
                  <td>{getSum(expense?.expense)}</td>
                </tr>
              ))
            ) : (
              <p className="text-warning my-5">No Expense Statement Found</p>
            )}

            <tr className="bg-gray-200">
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                Total (-) <span className="text-[8px]">TK.</span>:
              </td>

              <td>
                {" "}
                {getTotalExponse(projectExpense)}{" "}
                <span className="text-[9px]">TK.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {/* { expenses && expenses.length > 6 ? (
        <Pagination
          tableData={expenses}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      ) : null} */}
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default ProjectExpenseTable;
