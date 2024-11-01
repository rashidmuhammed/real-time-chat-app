import { useState } from "react";
import { AuthenticationService } from "../shared/Services/AuthenticationService";
import { IUser } from "../Models/Iuser";
type userDetails = {
  userName: string;
  password: string;
  mail: string;
};

function Signup() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fullname);
    const data: IUser = {
      name: fullname,
      password: password,
      email: email,
    };

    AuthenticationService.signupUser(data)
      .then((req) => {
        console.log(req.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Fullname</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Sign in with Google
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-4 text-center"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
