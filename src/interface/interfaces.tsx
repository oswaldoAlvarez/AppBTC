export interface StateApi {
  id: number;
  account: string;
  assets: {
    BTC: {address: string; quantity: number; type: string};
    ARS: {address: string; quantity: number; type: string};
  };
  history: [StateHistory];
}

export interface StateHistory {
  id: number;
  account: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  amount: string;
  currency: string;
  recipientAddress: string;
  fastestFee?: number;
}

export interface StateUsuarioPrincipal {
  firstName: string;
  lastName: string;
  BTC: number;
  ARSBTC: number;
}

export interface ContextApiProps {
  appState: StateApi;
  sendCripto: (
    amountToSend: string,
    userToSendBTC: string,
    showToast: void,
  ) => void;
  usuarioPrincipal: StateUsuarioPrincipal;
  comisiones: StateComisiones;
  altcoins: any;
}

export interface StateComisiones {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
}
export interface StateFees {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
}
