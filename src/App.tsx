import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
