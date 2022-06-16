import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./style";

function Home({ authenticated, setAuthenticate }) {
  if (!authenticated) {
    return <Redirect to={"/login"} />;
  }
  return (
    <>
      <Header logout={"logout"} setAuthenticate={setAuthenticate}></Header>
      <Container>
        <div>
          <span className="headgreet">
            <h2>Olá, {JSON.parse(localStorage.getItem("@Khub:user")).name}</h2>
          </span>
          <span className="headModule">
            <p>
              {JSON.parse(localStorage.getItem("@Khub:user")).course_module}
            </p>
          </span>
        </div>
      </Container>
    </>
  );
}

export default Home;
