import { Graphs } from '../graphs/Graphs';
import './Panel.css'

export const Panel = () =>{
    return (
        <div className="panel-container">
            <h1>Painel</h1>
            <Graphs />
            <Graphs />
        </div>
    );
}