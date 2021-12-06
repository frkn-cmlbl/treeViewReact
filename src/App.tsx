import products from "./data";
import "./style.css";
import TreeView from "./TreeView";
export default function App() {
  return (
    <div className="App">
      {products?.map((item) => {
        return <TreeView data={item} />;
      })}
    </div>
  );
}
