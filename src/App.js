import './App.css';
import Header from './Header.jsx'
import Lyon from './Images/Lyon.jpg'

function App() {
  return (
    <>
      <body className='body'>
        <div className='App'>
          <div className="App">
            <Header></Header>
            <img className="img-fluid" src={Lyon} alt="Lyon"></img>


          </div>
        </div>
      </body>
    </>
  );
}

export default App;
