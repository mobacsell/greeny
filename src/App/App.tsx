import { useApiData } from "../hooks/useApiData";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Order } from "./components/Order";
import { Orders } from "./components/Orders";

function App() {
  const { users, orders, products, loading } = useApiData();

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Order />
      {/* <Orders data={{ users, orders, products }} /> */}
      <Footer />
    </>
  );
}

export default App;
