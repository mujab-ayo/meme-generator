import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Color from "./components/Color";

function App() {
  const [selectedColor, setSelectedColor] = useState("black");

  const handleColor = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className="absolute mt-6 left-1/2  -translate-x-1/2  w-4/6 h-4/6 overflow-y-visible">
      <Header />
      <Form selectedColor={selectedColor} />
      <Color onColorChange={handleColor} />
    </div>
  );
}

export default App;
