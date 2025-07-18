import {NavBar} from "../../components/navbar_component/NavBar";
import { Panel } from "../../components/panel/Panel";

export const Home = () =>{
    return (
        <div className="home-container">
          <NavBar />
          <Panel />
        </div>
    );
}

