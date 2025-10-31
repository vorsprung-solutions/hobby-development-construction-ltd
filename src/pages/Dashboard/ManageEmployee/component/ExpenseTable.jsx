import { Tooltip } from "react-tooltip";

const ExpenseTable = ({ employeeExpense, getTotalExponse }) => {
  const getSum = (list) => {
    let sum = 0;
    list?.map((expense) => {
      sum += expense?.expense;
    });
    return sum;
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table ">
          <thead className="bg-blue-800 text-white ">
            <tr className="text-[12px] font-light">
              <th>No</th>
              <th>Date</th>
              <th>Project</th>
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
            {employeeExpense?.map((expense, index) => (
              <tr key={index} className="text-[12px] border shadow-lg">
                <th>{index + 1}</th>
                <td>{expense?.date}</td>
                <td>{expense?.projectId?.projectName || "Unknown"}</td>
                <td>
                  {expense?.expense?.map((i, index) => (
                    <tr key={index?._id} className="px-8">
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
                <td>1000</td>
              </tr>
            ))}
            <tr className="bg-gray-200">
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                Total (-) <span className="text-[8px]">TK.</span>:
              </td>

              <td>
                {" "}
                {getTotalExponse()} <span className="text-[9px]">TK.</span>
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

export default ExpenseTable;
