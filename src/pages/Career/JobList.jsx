// import React from 'react';
// import { Link } from 'react-router-dom';

// const JobList = ({ job }) => {
//     return (
//       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//         <th
//           scope="row"
//           className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//         >
//           {job?.jobTitle}
//         </th>
//         <td className="px-6 py-4">{job?.jobType}</td>
//         <td className="px-6 py-4">{job?.vacancy}</td>
//         <td className="px-6 py-4">{job?.location}</td>
//         <td className="px-6 py-4">{job?.deadline.split('T')[0]}</td>
//         <td className="px-6 py-4">
//           <Link
//             // send id to jobDetails page through query params
//             to={`job-details/${job?._id}?id=${job._id}`}
//             className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//           >
//             Details
//           </Link>
//         </td>
//       </tr>
//     );
// };

// export default JobList;
