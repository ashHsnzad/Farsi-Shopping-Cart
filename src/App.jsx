import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./contexts/GlobalContext";
import { ScaleLoader } from "react-spinners";

function App() {
  const { loading } = useGlobalContext();
  return loading ? (
    <main>
      <div className="loading">
        <ScaleLoader />
      </div>
    </main>
  ) : (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
