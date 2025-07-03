import logo from './logo.svg';
import './App.css';

function App() {
  { /* 繧ｹ繝・ャ繝冷蔵: 髢｢謨ｰ繧貞ｮ夂ｾｩ・・nClick逕ｨ・*/}
  const handleClick = () => {
    alert('繝懊ち繝ｳ縺後け繝ｪ繝・け縺輔ｌ縺ｾ縺励◆・');
    console.log('繧ｯ繝ｪ繝・け繧､繝吶Φ繝育匱蜍');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        { /* 繧ｹ繝・ャ繝冷贈: 繝懊ち繝ｳ繧定ｿｽ蜉・医％縺薙↓險倩ｿｰ) */}
        <button onClick={handleClick}>
          [繧ｯ繝ｪ繝・け縺励※繧｢繝ｩ繝ｼ繝医ｒ陦ｨ遉ｺ]
        </button>

      </header>
    </div>
  );
}

export default App;
