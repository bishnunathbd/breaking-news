import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h1 className='text-center text-secondary'>React Bootstrap</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
