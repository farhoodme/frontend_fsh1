import PageContent from "../components/layout/PageContent";
import InputGroup from "../components/InputGroup";

export default function Login() {
  return (
    <PageContent title="Login">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col w-full border border-gray-300 rounded-lg bg-white">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 class="text-gray-500 text-sm font-bold">Sign in with credentials</h6>
              </div>
              <hr className="mt-6 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div class="relative w-full mb-3">
                <InputGroup label="Username" type="text" name="username" placeholder="Username" />
                </div>
                <div class="relative w-full mb-3">
                <InputGroup label="Password" type="password" name="password" placeholder="Password" />
                </div>
                <div class="text-center mt-6">
                  <button
                    class="bg-blue-800 text-white hover:bg-blue-600 active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}
