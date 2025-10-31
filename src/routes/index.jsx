import { useAuth } from "../hooks/Auth/useAuth";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Login from "../pages/Login/Login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Contact_Us/Contact";
import Career from "../pages/Career/Career";
import Gallery from "../pages/Gallery/Gallery";
import Projects from "../pages/Projects/Projects";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageGallery from "../pages/Dashboard/ManageGallery/ManageGallery";
import UploadPhotoForm from "../pages/Dashboard/ManageGallery/components/UploadPhotoForm";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import UpdateGallery from "../pages/Dashboard/ManageGallery/components/UpdateGallery";
import ManageProject from "../pages/Dashboard/ManageProjects/ManageProject";
import UploadProject from "../pages/Dashboard/ManageProjects/components/UploadProject";
import UpdateProject from "../pages/Dashboard/ManageProjects/components/UpdateProject";
import ProjectDetails from "../pages/Dashboard/ManageProjects/components/ProjectDetails";
import ManageEmployee from "../pages/Dashboard/ManageEmployee/ManageEmployee";
import UploadEmployee from "../pages/Dashboard/ManageEmployee/component/UploadEmployee";
import UpdateEmployee from "../pages/Dashboard/ManageEmployee/component/UpdateEmployee";
import EmployeeDetails from "../pages/Dashboard/ManageEmployee/component/EmployeeDetails";
import BranchDetails from "../pages/Dashboard/ManageOffice/components/BranchDetails";
import UpdateBranch from "../pages/Dashboard/ManageOffice/components/UpdateBranch";
import AddBranch from "../pages/Dashboard/ManageOffice/components/AddBranch";
import ManageBranch from "../pages/Dashboard/ManageOffice/ManageBranch";
import ManageJob from "../pages/Dashboard/ManageJob/ManageJob";
import AddJobs from "../pages/Dashboard/ManageJob/component/AddJobs";
import UpdateJobs from "../pages/Dashboard/ManageJob/component/UpdateJobs";
import PhotoDetails from "../pages/Gallery/components/PhotoDetails";
import ProjectInfo from "../pages/Projects/components/ProjectInfo";
import DashboardCustomLayout from "../layouts/DashboardLayout/DashboardCustomLayout";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetails";
import ApplyNow from "../pages/JobDetailsPage/ApplyNow";
import UploadInteriorProject from "../pages/Dashboard/ManageProjects/components/UploadInteriorProject";
import UpdateInteriorProject from "../pages/Dashboard/ManageProjects/components/UpdateInteriorProject";
import { base_url } from "../config";
import ApplicantsTable from "../pages/Dashboard/ManageJob/component/ApplicantsTable";
import ClientQuery from "../pages/Dashboard/ClientQuery/ClientQuery";
import PageNotFound from "../components/PageNotFound";
import ReplayQuery from "../pages/Dashboard/ClientQuery/components/ReplayQuery";
import ForgetPasswordForm from "../features/authentication/components/ForgetPasswordForm";
import OTP from "../features/authentication/components/OTP";
import ResetPass from "../pages/Login/ResetPass";
import ChangePass from "../pages/Login/ChangePass";
import ResetPassword from "../features/authentication/components/ResetPassword";
import ChangePassword from "../features/authentication/components/ChangePassword";
import InteriorProjectInfo from "../pages/Projects/components/InteriorProjectInfo";
import TermAndCond from "../components/shared/TermsAndCon/TermAndCond";
import PrivacyPolicy from "../components/shared/PrivacyPolicy/PrivacyPolicy";
import Team from "../pages/Team/Team";
import UserAdministration from "../pages/Dashboard/UserAdministration/UserAdministration";
import NewUserForm from "../pages/Dashboard/UserAdministration/_components/NewUserForm";
import UpdateUserForm from "../pages/Dashboard/UserAdministration/_components/UpdateUserForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "",
//         element: <h1>Home</h1>,
//       },

//     ],
//   },
//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <DashboardLayout></DashboardLayout>
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "",
//         element: <h1>Dashboard Home</h1>,
//       },
//     ],
//   },
// ]);

// export default router;

// import {
//   Navigate,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";

const Routes = () => {
  const { token } = useAuth();
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },

        {
          path: "about",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "terms-conditions",
          element: <TermAndCond></TermAndCond>,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy></PrivacyPolicy>,
        },
        {
          path: "careers",
          element: <Career></Career>,
        },
        {
          path: "careers/job-details/:id",
          element: <JobDetailsPage></JobDetailsPage>,
        },
        {
          path: "careers/job-details/apply-now/:id",
          element: <ApplyNow></ApplyNow>,
          loader: ({ params }) => fetch(`${base_url}/job/${params.id}`),
        },
        // {
        //   path: "projects",
        //   element: <Projects></Projects>,
        // },
        {
          path: "projects/interior",
          element: <Projects></Projects>,
        },
        {
          path: "projects/interior/:id",
          element: <InteriorProjectInfo></InteriorProjectInfo>,
        },
        {
          path: "projects/construction",
          element: <Projects></Projects>,
        },
        {
          path: "projects/construction/:id",
          element: <ProjectInfo></ProjectInfo>,
        },
        {
          path: "gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "gallery/:id",
          element: <PhotoDetails></PhotoDetails>,
          loader: ({ params }) =>
            fetch(
              `https://shdcl-80a1145de3e6.herokuapp.com/api/v1/gallery/${params.id}`
            ),
        },
        {
          path: "contact-us",
          element: <Contact></Contact>,
        },
        {
          path: "our-team",
          element: <Team></Team>,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },

    {
      path: "/login",
      element: <Navigate to="/dashboard"></Navigate>,
    },

    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          {/* <DashboardLayout></DashboardLayout> */}
          <DashboardCustomLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "profile/change-password",
          element: <ChangePassword />,
        },
        {
          path: "manage-projects",
          element: <ManageProject></ManageProject>,
        },
        {
          path: "client-query",
          element: <ClientQuery></ClientQuery>,
        },
        {
          path: "/dashboard/client-query/replay",
          element: <ReplayQuery></ReplayQuery>,
        },
        {
          path: "upload-project/interior",
          element: <UploadInteriorProject></UploadInteriorProject>,
        },
        {
          path: "upload-project/construction",
          element: <UploadProject></UploadProject>,
        },
        {
          path: "construction-project/:id",
          element: <ProjectDetails />,
          loader: ({ params }) => fetch(`${base_url}/project/${params.id}`),
        },
        {
          path: "interior-project/:id",
          element: <ProjectDetails />,
          loader: ({ params }) => fetch(`${base_url}/project/${params.id}`),
        },
        {
          path: "update-construction-project/:id",
          element: <UpdateProject></UpdateProject>,
          loader: ({ params }) => fetch(`${base_url}/project/${params.id}`),
        },
        {
          path: "update-interior-project/:id",
          element: <UpdateInteriorProject></UpdateInteriorProject>,
          loader: ({ params }) => fetch(`${base_url}/project/${params.id}`),
        },
        {
          path: "project-details",
          element: <ProjectDetails></ProjectDetails>,
        },
        {
          path: "manage-employee",
          element: <ManageEmployee></ManageEmployee>,
        },
        {
          path: "upload-employee",
          element: <UploadEmployee></UploadEmployee>,
        },
        {
          path: "update-employee/:id",
          element: <UpdateEmployee></UpdateEmployee>,
          loader: ({ params }) => fetch(`${base_url}/employee/${params.id}`),
        },
        {
          path: "employee-details/:id",
          element: <EmployeeDetails></EmployeeDetails>,
          loader: ({ params }) => fetch(`${base_url}/employee/${params.id}`),
        },
        {
          path: "manage-gallery",
          element: <ManageGallery></ManageGallery>,
        },
        {
          path: "upload-photo",
          element: <UploadPhotoForm></UploadPhotoForm>,
        },
        {
          path: "update-photo/:id",
          element: <UpdateGallery></UpdateGallery>,
          loader: ({ params }) => fetch(`${base_url}/gallery/${params.id}`),
        },
        {
          path: "manage-branch",
          element: <ManageBranch></ManageBranch>,
        },
        {
          path: "upload-branch",
          element: <AddBranch></AddBranch>,
        },
        {
          path: "update-branch/:id",
          element: <UpdateBranch></UpdateBranch>,
          loader: ({ params }) => fetch(`${base_url}/branch/${params.id}`),
        },
        {
          path: "branch-details",
          element: <BranchDetails></BranchDetails>,
        },
        {
          path: "manage-jobs",
          element: <ManageJob></ManageJob>,
        },
        {
          path: "upload-job",
          element: <AddJobs></AddJobs>,
        },
        {
          path: "update-job/:id",
          element: <UpdateJobs></UpdateJobs>,
          loader: ({ params }) => fetch(`${base_url}/job/${params.id}`),
        },
        {
          path: "manage-jobs/show-applicants/:id",
          element: <ApplicantsTable></ApplicantsTable>,
          loader: ({ params }) => fetch(`${base_url}/job/${params.id}`),
        },
        {
          path: "manage-user",
          element: <UserAdministration />
        },
        {
          path: "manage-user/create-user",
          element: <NewUserForm />
        },
        {
          path: "manage-user/update-user/:id",
          element: <UpdateUserForm />,
          loader: ({ params }) =>
            fetch(`${base_url}/user/${params.id}`, {
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem(
                  "accessToken_Chinta"
                )}`,
              },
            }),
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login/forget-password",
      element: <ForgetPasswordForm />,
    },
    {
      path: "/login/verify-otp",
      element: <OTP />,
    },
    {
      path: "/login/reset-password",
      element: <ResetPassword />,
    },

    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "careers",
          element: <Career></Career>,
        },
        {
          path: "careers/job-details/:id",
          element: <JobDetailsPage></JobDetailsPage>,
        },
        {
          path: "careers/job-details/apply-now/:id",
          element: <ApplyNow></ApplyNow>,
          loader: ({ params }) => fetch(`${base_url}/job/${params.id}`),
        },
        // {
        //   path: "projects",
        //   element: <Projects></Projects>,
        // },
        {
          path: "projects/interior",
          element: <Projects></Projects>,
        },
        {
          path: "projects/interior/:id",
          element: <InteriorProjectInfo></InteriorProjectInfo>,
        },
        {
          path: "projects/construction",
          element: <Projects></Projects>,
        },
        {
          path: "projects/construction/:id",
          element: <ProjectInfo></ProjectInfo>,
        },
        {
          path: "gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "gallery/:id",
          element: <PhotoDetails></PhotoDetails>,
          loader: ({ params }) =>
            fetch(
              `https://shdcl-80a1145de3e6.herokuapp.com/api/v1/gallery/${params.id}`
            ),
        },
        {
          path: "contact-us",
          element: <Contact></Contact>,
        },
        {
          path: "our-team",
          element: <Team></Team>,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
