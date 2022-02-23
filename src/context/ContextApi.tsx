import React, {createContext, useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {getCustomDate} from '../helpers/Crypto';
import {EnumTransaction, EnumTransactionCash} from '../interface/types';
import {
  ContextApiProps,
  StateApi,
  StateUsuarioPrincipal,
} from '../interface/interfaces';
import Toast from 'react-native-toast-message';
import {getFees, getAltcoins} from '../Api/conectApi';
import {StateComisiones} from '../interface/interfaces';

export const initialState: StateApi = {
  id: 0,
  account: '',
  assets: {
    BTC: {address: '', quantity: 0, type: ''},
    ARS: {address: '', quantity: 0, type: ''},
  },
  history: [
    {
      id: 1,
      account: '17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem',
      type: 'CashOut',
      status: EnumTransaction.DONE,
      startDate: '10/10/2021 - 10:58',
      endDate: '11/10/2021',
      amount: '100',
      currency: 'BTC',
      recipientAddress: '89jZNX1SN5N5Ka8eQFxwQbkTFc3iqRYUjm',
    },
  ],
};

export const usuarioPrincipal: StateUsuarioPrincipal = {
  firstName: 'Oswaldo',
  lastName: 'Alvarez',
  BTC: 10,
  ARSBTC: 250000,
};

export const ContextApi = createContext({} as ContextApiProps);

export const ContextProvider = ({children}: any) => {
  const [appState, setAppState] = useState<any>(initialState);
  const [comisiones, setComisiones] = useState<StateComisiones>({
    fastestFee: 0,
    halfHourFee: 0,
    hourFee: 0,
  });
  const [altcoins, setAltcoins] = useState<[string, any][]>([]);

  const sendCripto = (amountToSend: string, userToSendBTC: string) => {
    if (amountToSend === '' || userToSendBTC === '') {
      setAppState({
        ...appState,
        history: [
          ...appState.history,
          {
            type: EnumTransactionCash.FAIL,
            status: EnumTransaction.FAIL,
          },
        ],
      });

      Toast.show({
        type: 'error',
        text1: 'Transacción No Realizada.',
        text2: 'Ha habido un error con tu transacción.',
      });
    } else {
      setAppState({
        ...appState,
        history: [
          ...appState.history,
          {
            id: appState.history.length + 1,
            account: userToSendBTC,
            type: EnumTransactionCash.CASHIN,
            status: EnumTransaction.DONE,
            startDate: getCustomDate(),
            endDate: getCustomDate().slice(0, 10),
            amount: amountToSend,
            currency: 'BTC',
            recipientAddress: '89jZNX1SN5N5Ka8eQFxwQbkTFc3iqRYUjm',
          },
        ],
      });

      Toast.show({
        type: 'success',
        text1: 'Transacción Completada!',
        text2: 'Tú transacción ha sido completada con éxito! 👋',
      });
    }

    Keyboard.dismiss();
  };

  useEffect(() => {
    getFees().then(res => setComisiones(res));
    getAltcoins().then(res => {
      const temp = Object.entries(res.names);
      setAltcoins(temp);
    });
  }, []);

  return (
    <ContextApi.Provider
      value={{
        appState,
        sendCripto,
        usuarioPrincipal,
        comisiones,
        altcoins,
      }}>
      {children}
    </ContextApi.Provider>
  );
};
