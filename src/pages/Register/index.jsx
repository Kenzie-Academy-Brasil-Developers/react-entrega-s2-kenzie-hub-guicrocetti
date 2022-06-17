import { useForm } from "react-hook-form";
import { Container } from "./style";
import Header from "../../components/Header";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Register({ authenticated, setAuthenticate }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não são iguais")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toast.promise(
      api
        .post("users", data)
        .then((response) => {
          console.log(response.data);
          toast.success("Registrado com Sucesso");
          return setTimeout(() => {
            history.push("/login");
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

  if(authenticated){
    return <Redirect to={'/home'}/>
  }

  return (
    <Container>
      <Header back={"back"} setAuthenticate={setAuthenticate}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && <span className="errors"> {errors.name.message}</span>}
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email && (
          <span className="errors"> {errors.email.message}</span>
        )}
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password && (
          <span className="errors"> {errors.password.message}</span>
        )}
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="errors"> {errors.confirmPassword.message}</span>
        )}
        <label>Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio && <span className="errors"> {errors.bio.message}</span>}
        <label>Contato</label>
        <input
          type="text"
          placeholder="Opções de contato"
          {...register("contact")}
        />
        {errors.contact && (
          <span className="errors"> {errors.contact.message}</span>
        )}
        <label>Selecionar Módulo</label>
        <select type="text" {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Primeiro Módulo">Segundo módulo (Frontend Avançado)o</option>
          <option value="Primeiro Módulo">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Primeiro Módulo">Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module && (
          <span className="errors"> {errors.course_module.message}</span>
        )}
        <button type="submit">Registar</button>
      </form>
    </Container>
  );
}

export default Register;
