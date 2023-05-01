import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            type="email"
            placeholder=" E-mail : "
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            type="password"
            placeholder=" Password : "
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user)
                  navigate("/");
                })

                .catch((error) => {
                  const errorCode = error.code;

                  sethasError(true);

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseError("invalid Email");
                      break;

                    case "auth/user-not-found":
                      setfirebaseError("Not Found Email");
                      break;

                    case "auth/invalid-password":
                      setfirebaseError("Wrong Password");
                      break;

                    case "auth/too-many-requests":
                      setfirebaseError(
                        "Too many request, Please try again later"
                      );
                      break;

                    default:
                      setfirebaseError("Please check");
                      break;
                  }
                });
            }}
          >
            Sign In
          </button>
          <p className="account">
            Don't have an account <Link to="/">Sign-up</Link>
          </p>
          {hasError && <h2> {firebaseError} </h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
