import React, { useContext, useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import Context from "../Contex/Contex";
import TextToSpeechComponent from "./TextToSpeech";
export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setShowAlert] = useState(false);
  const [user_id, setUserId] = useState([]);
  const { userHandler } = useContext(Context);
  const userID = localStorage.getItem("id");
 
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify({
          email: login,
          password: password,
        }),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        console.log(data,"this is getting when i login ")
        const { token } = data;
        const {name,email}=data
        console.log(token, "getting token id");
        localStorage.setItem("token", token);
        localStorage.setItem("userName",name)
        localStorage.setItem("UserEmail",email)
        console.log(email,"this is email i mgetting")
        setShowAlert(true);
        setTimeout(() => {
          navigate("/home");
        }, 5000);

        console.log("Login successful:", data);
      } else {
        // Login failed
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            {alert && (
              <>
                <Alert setShowAlert={setShowAlert}></Alert>
                <TextToSpeechComponent successMessage=" You've successfully logged in. " />
              </>
            )}

            <form
              style={{ paddingRight: "40px" }}
              onSubmit={(e) => loginHandler(e)}
            >
              {/* Sign in section */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                {/* Facebook button */}
                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow"
                >
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>

                {/* Twitter button */}
                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow"
                >
                  {/* Twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>

                {/* Linkedin button */}
                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow"
                >
                  {/* Linkedin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </div>

              {/* Separator between social media sign in and email/password sign in */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold">Or</p>
              </div>

              {/* Email input */}
              <input
                type="email"
                placeholder="Email address"
                className="mb-6 p-3 w-full border border-neutral-300 rounded-lg"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />

              {/* Password input */}
              <input
                type="password"
                placeholder="Password"
                className="mb-6 p-3 w-full border border-neutral-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="mb-6 flex items-center justify-between">
                {/* Remember me checkbox */}
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input type="checkbox" value="" id="exampleCheck2" />
                  <label
                    className="inline-block pl-[0.15rem]"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* Login button */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow"
                >
                  Login
                </button>
                {/* Register link */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <a href="/" className="text-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
