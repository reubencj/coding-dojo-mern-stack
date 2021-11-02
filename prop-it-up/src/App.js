import "./App.css";
import PersonCard from "./Components/PersonCard";
function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Reuben"}
        lastName={"John"}
        age={32}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Karen"}
        lastName={"John"}
        age={29}
        hairColor={"Blonde"}
      />
      <PersonCard
        firstName={"Judah"}
        lastName={"John"}
        age={1}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
