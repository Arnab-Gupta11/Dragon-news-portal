import { FaGithub, FaGoogle } from "react-icons/fa";
const LoginWithSocial = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-5">Login With</h2>
      <div>
        <button className="btn btn-outline btn-info w-full normal-case text-xl font-medium mb-3">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full normal-case text-xl font-medium">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWithSocial;
