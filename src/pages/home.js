import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";


const Home = () => {

 const [user] = useAuthState(auth);

  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
      </Helmet>

      <Header />
      {user && <MainContent pageName="HOME Page" />}


      {!user && (
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontsize: "30px" }} to="/signin">
              Sign In
            </Link>
            to continue... 🧡
          </p>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Home;
