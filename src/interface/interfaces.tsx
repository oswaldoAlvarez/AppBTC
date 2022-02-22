export interface StateApi {
  id: number;
  name: string;
  assets: {
    BTC: {address: string; quantity: number; type: string};
    ARS: {address: string; quantity: number; type: string};
  };
  history: [any];
}

export interface StateUsuarioPrincipal {
  firstName: string;
  lastName: string;
  BTC: string;
  ARSBTC: number;
}

export interface ContextApiProps {
  sendCripto: (
    amountToSend: string,
    userToSendBTC: string,
    showToast: void,
  ) => void;
  appState: StateApi;
  usuarioPrincipal: StateUsuarioPrincipal;
}
