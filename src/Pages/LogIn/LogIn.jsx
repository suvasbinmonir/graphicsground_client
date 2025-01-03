import { useContext, useState } from "react";
import "./LogIn.css";
import img from "./logoIcon.png";
import logo from "/logolight.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { logIn, googleSignIn } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    setErrorMsg("");
    setSuccessMsg("");
    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setSuccessMsg(
          "hurray!!!! your account have been created success fully"
        );
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // console.log("user fuck", result.user);
        // const userInfo = {
        //     email: result.user?.email,
        //     name: result.user?.displayName
        // }
        // axiosPublic.post('/users', userInfo)
        // .then(res =>{
        //     console.log(res.data);
        //     navigate('/');
        // })
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log("bokachoda", errorMessage);

        // ...
      });
  };
  return (
    <div className="w-full  py-16 bg-platinam">
      <Helmet>
        <title>GraphicsGround | LogIn</title>
      </Helmet>
      <div
        className="2xl:w-[1200px] xl:w-[80%] lg:w-[80%] bg-white  sm:mx-auto 2xl:min-h-[80vh] xl:max-h-[80vh] flex  mx-5  sm:rounded-2xl min-h-[80vh] rounded-lg shadow-2xl"
        style={{ boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <div className="w-full sm:w-[50%] flex  justify-center relative flex-col ">
          <div className="flex items-start justify-start top-0 absolute mt-5 ml-5 sm:mt-10 sm:ml-10 animate-pop">
            <img src={logo} alt="" className="w-[150px] sm:w-[200px]" />
          </div>

          <div className=" flex flex-col items-center animate-fade-in">
            <h1 className="2xl:text-sub-header-2 xl:text-sub-header-2 text-sub-header-2 font-sf-bold text-dark-green text-center pb-10">
              Login
            </h1>
            <h1 className="2xl:text-sub-header-2 xl:text-sub-header-2 text-regular font-sf-semibold pb-10 ">
              Welcome <span className="text-atlantis-green">Back!</span>
            </h1>

            <form onSubmit={handleLogin}>
              <div className="mb-4 w-80">
                <label
                  htmlFor="email"
                  className="block text-dark-green font-bold mb-2"
                >
                  Email*
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="shadow appearance-none border border-dark-green bg-white rounded w-full py-2 px-3 text-dark-green leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 w-80">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-dark-green font-bold mb-2"
                  >
                    Password*
                  </label>
                  <div className="flex items-center">
                    <input
                      required
                      type={showPassword ? "text " : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter Your Password"
                      className="shadow appearance-none border bg-white border-dark-green rounded w-full py-2 px-3 text-dark-green leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span
                      className="cursor-pointer w-10 -ml-10"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <FaEye className="w-10" />
                      ) : (
                        <FaEyeSlash className="w-10" />
                      )}
                    </span>
                  </div>
                </div>
                <h1 className="text-xs text-dark-green">
                  Must be at least 8 character
                </h1>
                <button className="w-80 bg-dark-green text-atlantis-green border rounded py-2 my-4 text-minimum font-sf-semibold">
                  Log In
                </button>
              </div>
            </form>
            {/* <button
              onClick={handleGoogleSignIn}
              className="w-80 border border-dark-green text-dark-green rounded py-2 text-minimum font-sf-bold "
            >
              Log in with Google
            </button> */}
            {successMsg && (
              <p className="border-2 py-3 rounded-md border-[#0F5132] w-full  px-20 text-[#75B798] capitalize bg-[#051B11] text-lg  ">
                {" "}
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="border-2 py-3 rounded-md border-[#842029] w-full  px-20 text-[#EA868F] capitalize bg-[#2C0B0E] text-lg ">
                {" "}
                {errorMsg}
              </p>
            )}
          </div>
        </div>
        <div className="2xl:w-[50%] xl:w-[50%]  bg-dark-green mx-auto sm:flex items-center justify-center rounded-r-2xl hidden animate-fade-in">
          <img className="w-[300px] " src={img} alt="graphicGround logo" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
