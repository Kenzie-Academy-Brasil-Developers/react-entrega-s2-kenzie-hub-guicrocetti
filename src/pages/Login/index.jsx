import { useForm } from "react-hook-form";
import { Container } from "./style";
import Header from "../../components/Header";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ setAuthenticate, authenticated }) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    toast.promise(
      api
        .post("sessions", data)
        .then((response) => {
          console.log(response.data)
          const { token, user } = response.data;
          localStorage.setItem("@Khub:token", JSON.stringify(token));
          localStorage.setItem("@Khub:user", JSON.stringify(user));
          toast.success(`Bem vindo ${response.data.user.name}`);
          setAuthenticate(true);
          setTimeout(() => {
            return history.push("/home");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        }),
      {
        pending: "Processando...",
      }
    );
  };

  if (authenticated) {
    return <Redirect to={"/home"} />;
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" required {...register("email")} />
          <label>Senha</label>
          <input type="password" required {...register("password")} />
          <button>Entrar</button>
          <div className="login-register">
            <p>Ainda não possui uma conta?</p>
            <button onClick={() => history.push("/register")}>
              Cadastre-se
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Login;
