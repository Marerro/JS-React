import Colorstripes from "./components/Colorstripes"
import hexaColor from "./components/color_generator";

function App() {
  return (
    <>
    <Colorstripes hexaColor={hexaColor}/>
    </>
  );
}
export default App;
