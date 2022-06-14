import { useForm } from "react-hook-form";
import { Container } from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Header back={"back"}/>
      <form>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>
      <label>Nome</label>
      <input type="text" placeholder="Digite aqui seu nome"/>
      <label>Email</label>
      <input type="email" placeholder="Digite aqui seu email"/>
      <label>Senha</label>
      <input type="password" placeholder="Digite aqui sua senha"/>
      <label>Confirmar Senha</label>
      <input type="password" placeholder="Digite novamente sua senha"/>
      <label>Bio</label>
      <input type="text" placeholder="Fale sobre você"/>
      <label>Contato</label>
      <input type="text" placeholder="Opções de contato" />
      <label>Selecionar Módulo</label>
      <select type="text">
      <option value='Primeiro Módulo'>Primeiro Módulo</option>
      <option value='Primeiro Módulo'>Segundo Módulo</option>
      <option value='Primeiro Módulo'>Terceiro Módulo</option>
      <option value='Primeiro Módulo'>Quarto Módulo</option>
      </select>
      <button>Registar</button>
      </form>
    </Container>

  );
}

export default Register