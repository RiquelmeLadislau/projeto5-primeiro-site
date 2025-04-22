import react from './assets/react.png'
export default function App() {
  return (
    <div>
      <img src={react} alt="" />
      <h1>
        React
      </h1>
      <p>A bliblioteca para a interface de usuário web e nativas</p>
      <button>Aprenda react</button><button>Referência da API</button>
      <hr/>
      <h1>Crie interfaces de usuários de componentes</h1>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamadas componentes.</p>
      <hr />
      <h1>Escreva componentes com código e marcação</h1>
      <p>Componentes react são funções javascript. A sintaxe de marcação é chamada JSX. É uma extensão da sintaxe Javascript popularizada pelo React</p>
      <hr />
      <h1>Próximos passos</h1>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos Javascript</li>
      </ul>
    </div>
  )
}