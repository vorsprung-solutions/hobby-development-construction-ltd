import UploadButton from '../../../components/button/UploadButton';
import JobTable from './component/JobTable';

const ManageJob = () => {
    return (
        <div className="my-5 mx-10 ">
      <div className="flex justify-between items-center mx-5">
        <h1 className="lg:text-2xl text-blue-800 text-center my-6">Manage Jobs</h1>
        <UploadButton value={"Upload a Job"} linkTo={"/dashboard/upload-job"}></UploadButton>
      </div>
      <JobTable></JobTable>
    </div>
    );
};

export default ManageJob;