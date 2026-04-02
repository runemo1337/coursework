import Character from "./components/Characters";
import './App.css';


function App() {
  return (
    <div>
      <h1>IT-офис</h1>
      <div className = "characters-grid">
        <Character name = "Егор" role = "Backend"/>
        <Character name = "Аня" role = "Frontend" />
        <Character name = "Андрей" role = "DevOps" />
        <Character name = "Вова" role = "Data science" />
        <Character name = "Матвей" role = "Analytics" />
      </div>
      
    </div>
  );

}

export default App;