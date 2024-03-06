import { Route, Routes } from "react-router-dom";
import SigninForm from "../_auth/forms/SigninForm";
import SignUpForm from "../_auth/forms/SignUpForm";
import Home from "../_root/pages/Home";
import AuthLayout from "../_auth/AuthLayout";
import RootLayout from "../_root/RootLayout";

function MainRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
