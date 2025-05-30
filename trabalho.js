function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  if (idade===1 && porte=='M'){
    return true
  } else{
    return false
  }
}

function calcularConsumoDeRacao(nome, idade, peso) {
  const gramaPorKgDia = 300
  const consumoDiarioPet = peso * gramaPorKgDia
  
  return consumoDiarioPet
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividade = porte.toLowerCase() === "pequeno" ? "brincar dentro de casa"
        : porte.toLowerCase() === "médio" ? "Caminhada no quarteirão"
            : porte.toLowerCase() === "grande" ? "Correr no parque"
                : "Porte inválido"
    return atividade
}

async function buscarDadoAsync() {
    const infoDado = "Pipoca"
    return new Promise((dado) => {
        setTimeout(() => {
            dado(infoDado);
        }, 500);
    });
}




export{
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}

