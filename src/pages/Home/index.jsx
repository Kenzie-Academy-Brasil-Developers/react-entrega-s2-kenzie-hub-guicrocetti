import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import api from "../../services/api";
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
import { useEffect, useState } from "react";
import ModalAdd from "../../components/Modal";
import ModalEdit from "../../components/ModalEdit";

function Home({ authenticated, setAuthenticate }) {
  const [listItens, setListItens] = useState();
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [techItem, setTechItem] = useState("");
  const userId = JSON.parse(localStorage.getItem("@Khub:user")).id || "";

  function loadList() {
    api
      .get("users/" + userId, {})
      .then((response) => {
        setListItens(response.data.techs);
        localStorage.setItem("@Khub:user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadList(); //eslint-disable-next-line
  }, []);

  const handleOpen = () => {
    setOpenModalAdd(true);
  };

  const handleModalEdit = (e) => {
    setOpen(true);
    setTechItem(e.target.value);
    setTaskId(e.target.id);
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
                  className="tech-header"
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
              {listItens?.map((item) => (
                <Item className="Item" key={item.id}>
                  <Grid justifyContent="flex-end" alignItems="center" container>
                    <Grid item xs={9}>
                      <h4>{item.title}</h4>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{item.status}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        id={item.id}
                        value={item.title}
                        onClick={(e) => handleModalEdit(e)}
                        className='Edit-Button'
                      >
                        <RuleFolderIcon className="Icon" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Item>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
      <ModalAdd
        openModalAdd={openModalAdd}
        setOpenModalAdd={setOpenModalAdd}
        loadList={loadList}
      />
      <ModalEdit
        open={open}
        setOpen={setOpen}
        loadList={loadList}
        taskId={taskId}
        techItem={techItem}
      />
    </>
  );
}

export default Home;
