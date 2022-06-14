import { useForm } from "react-hook-form";
import { Container } from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Header />
      <form>
      <h2>Login</h2>
      <label>Email</label>
      <input type="text" />
      <label>Senha</label>
      <input type="text" />
      <button>Entrar</button>
      <div className="login-register">
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => history.push('/register')}>Cadastre-se</button>
      </div>
      </form>
    </Container>

  );
}

export default Login;
