import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./style.css";
import { Typography, Grid, Select, MenuItem, TextField, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function ModalEdit({ open, setOpen, loadList, taskId, techItem }) {



  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@Khub:token")) || "";
  const AddToList = (data) => {
    toast.promise(
      api
        .put("users/techs/" + taskId, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          toast.success(`${response.data.title}, Editado com Sucesso!`);
          loadList();
          handleClose();
        })
        .catch((error) => {
          toast.error(error);
        }),
      {
        pending: "Processando...",
      }
    );
  };

  const deletItem = () => {
    toast.promise(
      api
        .delete("users/techs/" + taskId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(`${techItem}, foi excluido!`);
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

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="modalBox">
            <Grid className="headerGrid">
              <Typography>Tecnologia Detalhes</Typography>
            </Grid>
            <form onSubmit={(e) => e.preventDefault()}>
            <InputLabel id="demo-controlled-open-select-label">Nome</InputLabel>
              <TextField
                placeholder="Tecnologia..."
                name="tech"
                value={techItem}
              >
              </TextField>
              <InputLabel id="demo-controlled-open-select-label">Selecionar Status</InputLabel>
              <Select
                placeholder="Nĩvel"
                name="status"
                required
                {...register("status")}
                defaultValue='Iniciante'
              >
                <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
                <MenuItem value={"Avançado"}>Avançado</MenuItem>
              </Select>
              <div className="Modal-Buttons">
              <button type="click" onClick={handleSubmit(AddToList)}>Salvar alterações</button>
              <button type="click" onClick={handleSubmit(deletItem)}>Excluir</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
