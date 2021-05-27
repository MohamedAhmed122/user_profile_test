import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import CustomInput from './common/CustomInput';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Body />
        <Footer />
        <CustomInput placeholder='Hello' value={input} onChange={(e) => setInput(e.target.value)}  />
      </div>
    </div>
  );
}

export default App;
