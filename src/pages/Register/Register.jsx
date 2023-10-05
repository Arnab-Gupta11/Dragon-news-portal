import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleRegistation = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    const checked = form.get("terms");
    console.log(email, password, name, image, checked);
    // reset message
    setError("");

    // check validation
    if (!checked) {
      setError("Please accept our terms and conditions");
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
      <section className="mt-10">
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:min-h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">Register your account</h1>
              <hr />
              <form className="space-y-4 md:space-y-6" onSubmit={handleRegistation}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border w-full py-4 px-4 rounded-md"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    className="bg-gray-50 border w-full py-4 px-4 rounded-md"
                    placeholder="Enter your Photo URL"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border w-full py-4 px-4 rounded-md"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border w-full py-4 px-4 rounded-md"
                    required=""
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" className="w-4 h-4 border " name="terms" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="">
                        Accept our terms and conditions
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gray-900 border text-white py-4 px-4 rounded-md">
                  Login
                </button>
                <p className="text-sm font-medium text-red-600">{error}</p>

                <p className="text-sm">
                  Already have an account?
                  <Link to={"/login"} className="font-medium text-pink-600 hover:underline ml-2">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
