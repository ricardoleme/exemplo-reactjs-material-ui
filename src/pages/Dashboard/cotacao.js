import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
import CardMoeda from "./cardMoeda";
import ImagemDolar from "../../assets/images/dolar.jpg";

export default function Cotacao() {  
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [cotacoes, setCotacoes] = useState([]);

  // Nota: O array [] deps vazio significa
  // este useEffect será executado uma vez
  // semelhante ao componentDidMount()
  useEffect(() => {
   carregaCotacoes();
  }, []);

  function carregaCotacoes(){
    fetch("https://economia.awesomeapi.com.br/all/EUR-BRL,USD-BRL", {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          setCarregando(true);
          setCotacoes(result);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        error => {
          setCarregando(true);
          setError(error);
          setCotacoes([]);
        }
      );
  }

  if (!carregando) {
    return (
      <div>
        <LinearProgress variant="query" />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        
        {error && (
          <div>
            <Alert severity="error">Ocorreu um erro: {error.message} </Alert>
          </div>
        )}
        {cotacoes.USD && (                    
            <CardMoeda 
                    nomeMoeda={cotacoes.USD.name} 
                    imagemMoeda={ImagemDolar}
                    cotacaoMoeda={cotacoes.USD.ask} 
                    variacaoMoeda={cotacoes.USD.pctChange}
                    />                     
        )}
      </React.Fragment>
    );
  }
}
