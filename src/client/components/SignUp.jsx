import loginImg from "../assets/trees.jpg";

function SignUp(props) {
  const buttonHandler = (e) => {
    e.preventDefault();
    props.toggleLogin(true);
  };

  return (
    <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <img src={loginImg} alt="" className="object-cover w-full h-screen" />
      </div>
      <div className="flex flex-col justify-center bg-gray-100 dark:bg-gray-700">
        <form
          action=""
          className="mx-auto w-full max-w-[400px] bg-white p-4 rounded-lg dark:bg-slate-900"
        >
          <h2 className="py-6 text-4xl font-bold text-center">Sign-UP.</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="p-2 duration-200 border border-gray-700 border-opacity-25 rounded-md outline-none dark:border-white dark:bg-gray-900 hocus:border-opacity-80"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="p-2 duration-200 border border-gray-700 border-opacity-25 rounded-md outline-none dark:border-white dark:bg-gray-900 hocus:border-opacity-80"
            />
          </div>
          <button type="submit" className="flex w-full m-auto my-3 btn">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-stretch">
              <input className="mr-1" type="checkbox" />
              Remember me
            </p>
            <button onClick={buttonHandler}>Already have an account?</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
