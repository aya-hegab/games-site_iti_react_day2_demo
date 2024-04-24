import Header from './components/Header';
import GamesList from './components/Games/GamesList';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className='container my-5'>
         <GamesList />
      </div>
    </>
  )
}
export default App;
