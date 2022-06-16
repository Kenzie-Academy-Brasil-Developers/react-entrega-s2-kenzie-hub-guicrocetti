import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./style.css";
import { TextField, Typography, Grid, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ModalAdd({ openModalAdd, setOpenModalAdd }) {
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

  const handleClose = () => setOpenModalAdd(false);

  const onSubmit = (data) => console.log(data);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                placeholder="Tecnologia..."
                name="title"
                label="Nome"
                required
                {...register("title")}
                error={errors.title ? true : false}
                helperText={errors.title?.message}
              />
              <Select
                placeholder="Nĩvel"
                name="status"
                label="Selecionar Status"
                required
                {...register("status")}
                error={errors.status ? true : false}
                helperText={errors.status?.message}
              >
                <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
                <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
                <MenuItem value={'Avançado'}>Avançado</MenuItem>
              </Select>
              <button type="submit">Cadastrar</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
