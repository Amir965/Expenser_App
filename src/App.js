import Home from "./pages/home/index";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
