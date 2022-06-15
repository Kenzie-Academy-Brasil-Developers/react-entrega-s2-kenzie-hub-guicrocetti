import { Redirect } from "react-router-dom"
import Header from "../../components/Header";


function Home({ authenticated }) {


  if(!authenticated){
   return <Redirect to={'/login'}/>
  }
  return (
    <div>
      <Header logout={"logout"}></Header>

    </div>
  )
}

export default Home