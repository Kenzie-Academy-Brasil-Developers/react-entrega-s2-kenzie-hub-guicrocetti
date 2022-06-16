import { Redirect } from "react-router-dom";
import Header from "../../components/Header";

function Home({ authenticated, setAuthenticate }) {
  if (!authenticated) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div>
      <Header logout={"logout"} setAuthenticate={setAuthenticate}></Header>
      <div className="userHead">
        <span className="headgreet"><h2>Olá, {JSON.parse(localStorage.getItem('@Khub:user')).name}</h2></span>
        <span className="headModule"><p>{JSON.parse(localStorage.getItem('@Khub:user')).course_module}</p></span>
      </div>
    </div>
  );
}

export default Home;
