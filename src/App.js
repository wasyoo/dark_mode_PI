import { ThemeProvider } from 'context/theme.context';
import './App.css';
import Content from 'Components/Content/Content';
import ToggleButton from 'Components/ToggleBtn/ToggleBtn';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ToggleButton />
        <Content />
      </ThemeProvider>
    </div>
  );
}

export default App;
