import React, {FunctionComponent, useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {SimpleTitle} from '../components/dummyComponents/SimpleTitle';
import {TransactionCard} from '../components/TransactionCard';
import {globalStyles} from '../theme/appTheme';
import {ContextApi} from '../context/ContextApi';
import {StateHistory} from '../interface/interfaces';

export const HistorialScreen: FunctionComponent = () => {
  const {appState, comisiones} = useContext(ContextApi);
  const {history} = appState;
  const {fastestFee} = comisiones;

  return (
    <View style={globalStyles.globalMargin}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SimpleTitle title="Aquí podrá visualizar sus transacciones" />
        {history.map((item: StateHistory, index: number) => {
          const {
            id,
            account,
            type,
            status,
            startDate,
            endDate,
            amount,
            currency,
            recipientAddress,
          } = item;
          return (
            <TransactionCard
              id={id}
              key={index}
              account={account}
              type={type}
              status={status}
              startDate={startDate}
              endDate={endDate}
              amount={amount}
              currency={currency}
              recipientAddress={recipientAddress}
              fastestFee={fastestFee}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
