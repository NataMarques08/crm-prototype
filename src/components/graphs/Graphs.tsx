import './Graphs.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";


const data = [
    { usuario: 'Janeiro', venda: 400},
    { usuario: 'Fevereiro', venda: 300},
    { usuario: 'Março', venda: 200},
]

export const Graphs = () => {
    return(
        <div className="graph-container">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="usuario" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="venda" fill="#209c15" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}