import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";


const data = [
    { name: 'Janeiro', venda: 400},
    { name: 'Fevereiro', venda: 300},
    { name: 'Março', venda: 200},

]

export const Graphs = () => {
    return(
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="venda" fill="#209c15" />
            </BarChart>
        </ResponsiveContainer>
    );
}