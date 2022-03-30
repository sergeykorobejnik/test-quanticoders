
import MainForm from "./components/MainForm/MainForm";
import css from './App.module.scss'

function App() {
  return (
    <div className="App">
        <div className={css.wrapper}>
            <MainForm/>
        </div>
    </div>
  );
}

export default App;
