import { useState } from "react";
import Router from "next/router";
import PageContent from "../components/layout/PageContent";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "../api/AccountAPI";
import { useUser } from "../api/IdentityAPI";
import Cookies from "js-cookie";
import cogoToast from "cogo-toast";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  useUser({ redirectTo: "/", redirectIfFound: true });

  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => submit(values),
  });

  const submit = async ({ email, password }) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      await login({ email, password })
        .then((data) => Cookies.set("token", data.token))
        .then(() => Router.push("/"))
        .finally(() => setLoading(false));
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        cogoToast.error("Email or Password is invalid", {
          position: "top-left",
        });
      }
      if (error.response.status === 500) {
        cogoToast.error("Server error occured", {
          position: "top-left",
        });
      }
      if (error.response.data) {
        const { message } = error.response.data;
        setErrorMsg(message);
      }
    }
  };

  return (
    <PageContent title="Login">
      <div className="absolute w-full h-full bg-gray-100">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col w-full border border-gray-300 rounded-lg bg-white">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-sm font-bold">
                    Sign in with credentials
                  </h6>
                </div>
                <hr className="mt-6 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <InputGroup
                      label="Email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={formik.errors.email}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <InputGroup
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      error={formik.errors.password}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <Button
                      type="submit"
                      text="Sign In"
                      bgColor="bg-blue-600"
                      hoverColor="bg-blue-700"
                      activeColor="bg-blue-800"
                      textColor="white"
                      extraClass="w-full"
                      isLoading={isLoading}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
