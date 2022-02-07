import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register  from "./pages/Register"
import Login  from "./pages/Login"
import Transactions from "./pages/Transactions/index.jsx"
import CashIn from "./pages/CashIn";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import CashOut from "./pages/CashOut";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path = "/transacoes" element= {<Transactions />} />
          <Route path="/novaEntrada" element={<CashIn />} />
          <Route path="/novaSaida" element= {<CashOut />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;