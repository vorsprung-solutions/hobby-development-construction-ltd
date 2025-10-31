import React from "react";
import { getTotalExponse, getTotalIncome } from "../../../../utils/calculation";

const NetBalance = ({ Income, Expense }) => {
  return (
    <div className=" ">
      {/* <p className=" text-xl text-blue-500 font-bold">Summary</p> */}
      <div>
        <table>
          <tbody>
            <tr>
              <th className="th">Title</th>
              <th className="th">Amount</th>
            </tr>
            <tr>
              <th className="td">Debit (+)</th>
              <td className="td">{getTotalIncome(Income)}</td>
            </tr>
            <tr>
              <th className="td">Credit (-)</th>
              <td className="td">{getTotalExponse(Expense)}</td>
            </tr>
            <tr>
              <th className="td">Net</th>
              <td className="td">
                {getTotalIncome(Income) - getTotalExponse(Expense)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NetBalance;
