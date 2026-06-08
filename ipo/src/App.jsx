import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <h1>Centro de Inspeções de Automóveis</h1>
      <p>IPO - ESDS1</p>
    </div>
  );
}
function ClientesList() {

  return (

    <><h2>
      Página de Clientes
      <button className="btn btn-primary text-right float-right">
        <i className="fa fa-plus"></i>
        Novo Cliente
      </button>
      <button className="btn btn-secondary text-right float-right mr-2">
        <i className="fa fa-edit"></i>
        Atualizar Clientes
      </button>
    </h2><div className="container">

        <table class="table table-striped">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Morada</th>
              <th>NIF</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Júlio Pinho</td>
              <td>Lisboa</td>
              <td>1234567</td>
                <button className="btn btn-dark mr-1"><i className="fa fa-trash"></i></button>
                <button className="btn btn-dark mr-1"><i className="fa fa-edit"></i></button>
                <button className="btn btn-dark mr-1"><i className="fa fa-eye"></i></button>
            </tr>
            <tr>
              <td>2</td>
              <td>Barros Silva</td>
              <td>Madeira</td>
              <td>32443141</td>
              <button className="btn btn-dark mr-1"><i className="fa fa-trash"></i></button>
              <button className="btn btn-dark mr-1"><i className="fa fa-edit"></i></button>
              <button className="btn btn-dark mr-1"><i className="fa fa-eye"></i></button>
            </tr>
            <tr>
              <td>3</td>
              <td>Maria Juahna</td>
              <td>Leiria</td>
              <td>9876543</td>
              <button className="btn btn-dark mr-1"><i className="fa fa-trash"></i></button>
              <button className="btn btn-dark mr-1"><i className="fa fa-edit"></i></button>
              <button className="btn btn-dark mr-1"><i className="fa fa-eye"></i></button>
            </tr>
          </tbody>
        </table>
      </div></>
  );

}



function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}
export default App