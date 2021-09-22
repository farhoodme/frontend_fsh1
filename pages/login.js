import {useState} from "react";
import PageContent from "../components/layout/PageContent";
import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => submit(values),
  });

  const submit = ({ username, password }) => {
    //TODO
  };

  return (
    <PageContent title="Login">
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
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username}
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
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
