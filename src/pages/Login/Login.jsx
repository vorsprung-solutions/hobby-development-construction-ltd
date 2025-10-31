import React from "react";
import LoginForm from "../../features/authentication/components/LoginForm";
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
      <Helmet>
        
        <meta
          name="description"
          content="Have questions or inquiries? Contact us to get in touch with our friendly and dedicated team. We're here to assist you, provide information, and address your needs. Your feedback is valuable to us, and we look forward to hearing from you."
        />
      </Helmet>
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
