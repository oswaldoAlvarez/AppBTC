import React, {createContext, useState} from 'react';
import {Keyboard} from 'react-native';

export interface StateApi {
  id: number;
  name: string;
  assets: {
    BTC: {address: string; quantity: number; type: string};
    ARS: {address: string; quantity: number; type: string};
  };
  history: [any];
}

export const initialState: StateApi = {
  id: 0,
  name: '',
  assets: {
    BTC: {address: '', quantity: 0, type: ''},
    ARS: {address: '', quantity: 0, type: ''},
  },
  history: [
    {
      id: 1,
      name: 'peter',
      type: 'CashIn',
      status: 'done',
      startDate: '10-10-21',
      endDate: '11-10-21',
      amount: '100',
      currency: 'BTC',
      recipientAddress: '987654321',
    },
  ],
};

export const usuarioPrincipal = {
  firstName: 'Oswaldo',
  lastName: 'Alvarez',
  BTC: '10',
  ARSBTC: 250000,
};

export interface ContextApiProps {
  stateApi: StateApi;
  sendCripto: any;
  initialState: any;
  usuarioPrincipal: any;
  estadoInicial: any;
}

export const ContextApi = createContext({} as ContextApiProps);

export const ContextProvider = ({children}: any) => {
  const [estadoInicial, setEstadoInicial] = useState(initialState);

  const sendCripto = (
    userToSendBTC: any,
    setActuallyTrader: any,
    setActuallyAmount: any,
    amountToSend: any,
    actuallyTrader: any,
  ) => {
    setActuallyTrader(userToSendBTC);
    setActuallyAmount((usuarioPrincipal.BTC = amountToSend));
    if (userToSendBTC.length > 0) {
      estadoInicial.history.push({
        id: 2,
        name: actuallyTrader,
        type: 'CashIn',
        status: 'done',
        startDate: '13-10-21',
        endDate: '14-10-21',
        amount: amountToSend,
        currency: 'BTC',
        recipientAddress: '987654321',
      });
    }
    console.log(
      'estado inicial::::',
      JSON.stringify(estadoInicial.history, null, 4),
    );

    Keyboard.dismiss();
  };

  return (
    <ContextApi.Provider
      value={{
        stateApi: initialState,
        initialState,
        sendCripto,
        usuarioPrincipal,
        estadoInicial,
      }}>
      {children}
    </ContextApi.Provider>
  );
};
