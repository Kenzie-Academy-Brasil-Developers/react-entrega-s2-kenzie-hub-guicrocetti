import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./style.css";
import { TextField, Typography, Grid, Select, MenuItem, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function ModalAdd({ openModalAdd, setOpenModalAdd, loadList }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const token = JSON.parse(localStorage.getItem("@Khub:token")) || "";
  const AddToList = (data) => {
    toast.promise(
      api
        .post("users/techs/", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(`${response.data.title}, Cadastrado com Sucesso!`);
          loadList();
          handleClose();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        }),
      {
        pending: "Processando...",
      }
    );
  };

  const handleClose = () => setOpenModalAdd(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalAdd}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalAdd}>
          <Box className="modalBox">
            <Grid className="headerGrid">
              <Typography>Cadastrar Tecnologia</Typography>
            </Grid>
            <form onSubmit={handleSubmit(AddToList)}>
            <InputLabel id="demo-controlled-open-select-label">Nome</InputLabel>
              <TextField
                placeholder="Tecnologia..."
                name="title"
                required
                {...register("title")}
                error={errors.title ? true : false}
              />
              <InputLabel id="demo-controlled-open-select-label">Selecionar Status</InputLabel>
              <Select
                placeholder="Nĩvel"
                name="status"
                required
                {...register("status")}
                error={errors.status ? true : false}
              >
                <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
                <MenuItem value={"Avançado"}>Avançado</MenuItem>
              </Select>
              <button type="submit">Cadastrar</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
