import React, {useState, useEffect} from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTheme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Cabecalho from "./cabecalho";


export default function Grafico() {
  const theme = useTheme();
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [historicoCotacoes, setHistoricoCotacoes] = useState([]);

  useEffect(() => {
    carregaHistoricoCotacoes();
   }, []);

   function carregaHistoricoCotacoes(){
    fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/30", {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(
        result => {
          result.forEach(function (element) {
            element.dataCotacao = new Date(element.timestamp * 1000).toLocaleDateString('en-GB');
            element.alta = element.high;
            element.baixa = element.low;
          });
          console.log(result);  
          setCarregando(true);
          setHistoricoCotacoes(result);
        },
        // Nota: é importante lidar com erros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        error => {
          setCarregando(true);
          setError(error);
          setHistoricoCotacoes([]);
        }
      );
  }
  
  
  
  return (
    <React.Fragment>
         {!carregando &&
        <LinearProgress variant="query" /> 
         }
         {error && (
          <div>
            <Alert severity="error">Ocorreu um erro: {error.message} </Alert>
          </div>
        )}        
      <Cabecalho>Evolução do Dólar nos últimos 7 dias</Cabecalho>
      <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={historicoCotacoes}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dataCotacao" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alta" fill={theme.palette.primary.light} />
        <Bar dataKey="baixa" fill={theme.palette.warning.light} />
      </BarChart>
      </ResponsiveContainer>      
    </React.Fragment>
  );
        
}
