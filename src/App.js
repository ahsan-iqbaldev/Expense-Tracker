import './App.css';
import { AddTransactions } from './components/AddTransactions';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Navbar } from './components/Navbar';
import { TransactionList } from './components/TransactionList';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
  <GlobalProvider>
  <Navbar/>
  <div className="container">
  <Balance/>
  <IncomeExpense/>
  <TransactionList/>
  <AddTransactions/>
  </div>
  </GlobalProvider>
  );
}

export default App;
