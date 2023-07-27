import { useApiData } from "../hooks/useApiData";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Orders } from "./components/Orders";

function App() {
  const { users, orders, products, loading } = useApiData();

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Orders data={{ users, orders, products }} />
      <Footer />
    </>
  );
}

export default App;
