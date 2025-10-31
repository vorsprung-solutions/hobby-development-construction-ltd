import { Tooltip } from "react-tooltip";

const IncomeTable = ({ employeeIncome, getTotalIncome }) => {
  const getSum = (list) => {
    let sum = 0;
    list?.map((income) => {
      sum += income?.amount;
    });
    return sum;
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table">
          <thead className="bg-blue-800 text-white ">
            <tr className="text-[12px] font-light">
              <th>No</th>
              <th>Date</th>
              {/* { tag == "project" ? <th>Project Name</th> : <th>Employee Name</th>} */}
              <th>Project</th>
              <th>
                <tr>
                  <td colSpan="4" className="text-center">
                    Income
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
            {employeeIncome?.length ? (
              employeeIncome?.map((income, index) => (
                <tr key={index} className="text-[12px] border shadow-lg">
                  <th>{index + 1}</th>
                  <td>{income?.date}</td>
                  <td>{income?.projectId?.projectName || "Unknown"}</td>
                  {/* <td>{project?.projectName} </td> */}
                  {/* <td>MY house</td> */}
                  {/* { tag == "project" ? <td>{expense?.projectId?.projectName}</td> : <td>{expense?.userId?.name}</td>} */}
                  <td>
                    {income?.income?.map((i) => (
                      <tr key={i?._id} className="px-8">
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
                  <td>{getSum(income?.income)}</td>
                </tr>
              ))
            ) : (
              <p className="text-warning my-5">No Income Statement Found</p>
            )}
            <tr className="bg-gray-200">
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                Total (+) <span className="text-[8px]">TK.</span>:
              </td>

              <td className="px-5"> {getTotalIncome()}</td>
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

export default IncomeTable;
