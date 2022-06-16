import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./style";
import {
  Paper,
  Box,
  Stack,
  Typography,
  Grid,
  IconButton,
  styled,
} from "@mui/material/";
import RuleFolderIcon from "@mui/icons-material/RuleFolder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import ModalAdd from "../../components/Modal";

function Home({ authenticated, setAuthenticate }) {
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const handleOpen = () => {
    setOpenModalAdd(true);
    console.log(openModalAdd)
  };

  if (!authenticated) {
    return <Redirect to={"/login"} />;
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

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
        <Box className="Box" sx={{ width: "100%" }}>
          <Paper elevation={0} className="Paper">
            <Stack spacing={2}>
              <Item className="Item">
                <Grid
                  justifyContent="space-between"
                  alignItems="center"
                  container
                  padding="1rem"
                >
                  <h3>Tecnologias</h3>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleOpen()}
                  >
                    <AddBoxIcon className="IconAdd" />
                  </IconButton>
                </Grid>
              </Item>
            </Stack>
            <Stack spacing={2} className="Stack">
              <Item className="Item">
                <Grid justifyContent="flex-end" alignItems="center" container>
                  <Grid item xs={9}>
                    <h4>React JS</h4>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>Filled</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => {
                        alert("clicado");
                      }}
                    >
                      <RuleFolderIcon className="Icon" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Item>
              <Item className="Item">Item 2</Item>
              <Item className="Item">Item 3</Item>
            </Stack>
          </Paper>
        </Box>
      </Container>
      <ModalAdd openModalAdd={openModalAdd} setOpenModalAdd={setOpenModalAdd} />
    </>
  );
}

export default Home;
