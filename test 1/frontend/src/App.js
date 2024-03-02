import Card from "./components/Card/Card";
import "./style/index.css";
import { fakeData } from "./fakeData";

export function App() {
  return (
    <div className="container">
      {fakeData.map((item) => (
        <Card header={item.header} options={item.options} text={item.text} />
      ))}
    </div>
  );
}
