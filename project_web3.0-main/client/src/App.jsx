import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    <Dashboard/>

  </div>
);

export default App;
