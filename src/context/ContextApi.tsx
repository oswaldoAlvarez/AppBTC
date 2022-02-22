import React, {createContext, useState} from 'react';
import {Keyboard} from 'react-native';
import {getCustomDate} from '../helpers/Crypto';
import {ContextApiProps, StateApi} from '../interface/interfaces';

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
      startDate: '10/10/21 - 10:58',
      endDate: '11/10/21',
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

export const ContextApi = createContext({} as ContextApiProps);

export const ContextProvider = ({children}: any) => {
  const [appState, setAppState] = useState<any>(initialState);

  const sendCripto = (amountToSend: string, userToSendBTC: string) => {
    setAppState({
      ...appState,
      history: [
        ...appState.history,
        {
          id: appState.history.length + 1,
          name: userToSendBTC,
          type: 'CashIn',
          status: 'done',
          startDate: getCustomDate(),
          endDate: getCustomDate().slice(0, 10),
          amount: amountToSend,
          currency: 'BTC',
          recipientAddress: '987654321',
        },
      ],
    });

    Keyboard.dismiss();
  };

  return (
    <ContextApi.Provider
      value={{
        appState,
        sendCripto,
        usuarioPrincipal,
      }}>
      {children}
    </ContextApi.Provider>
  );
};
