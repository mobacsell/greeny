import { useApiData } from "../hooks/useApiData";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

function App() {
  const { users, orders, products } = useApiData();

  return (
    <>
      <Header />
      <Orders data={{ users, orders, products }} />
      <Footer />
    </>
  );
}

export default App;
