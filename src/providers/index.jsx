import AuthProvider from "./AuthProvider/AuthProvider";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}

export default Providers;
