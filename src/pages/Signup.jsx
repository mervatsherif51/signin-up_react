import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>
            Create a New Account <span>💖</span>
          </p>
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
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  navigate("/signin");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  sethasError(true);

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseError("invalid Email");
                      break;

                    case "auth/invalid-password":
                      setfirebaseError("Wrong Password");
                      break;
                    case "auth/email-already-exists":
                      setfirebaseError("This email is already exists");
                      break;

                    case "auth/too-many-requests":
                      setfirebaseError(
                        "Too many request, Please try again later"
                      );
                      break;

                    default:
                      setfirebaseError("Please Check your Email & Password ");
                      break;
                  }
                });
            }}
          >
            Sign Up
          </button>
          <p className="account">
            Already have an account <Link to="/signin">Sign-in</Link>
          </p>
          {hasError && <h2> {firebaseError} </h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
