import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './state';
import { bindActionCreators } from 'redux';
import { RootState } from "./state/reducers"

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.bank)

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>0</h1>
      <button>Deposit</button>
      <button>Withdraw</button>
      <button>Bankrupt</button>
    </div>
  );
}

export default App;
