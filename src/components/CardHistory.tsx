import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {InfoComponent} from './dummyComponents/InfoComponent';

interface Props {
  nameTrader: string | undefined;
  typeTransaction: string | undefined;
  statusTransaction: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  amountToUse: string | undefined;
  currentCripto: string | undefined;
  explicationTitle: string | undefined;
}

export const CardHistory: FunctionComponent<Props> = ({
  explicationTitle,
  nameTrader,
  typeTransaction,
  statusTransaction,
  startDate,
  endDate,
  amountToUse,
  currentCripto,
}) => {
  return (
    <View style={styles.cardInfo}>
      <InfoComponent DataTransaction={explicationTitle} />
      <InfoComponent DataTransaction={nameTrader} />
      <InfoComponent DataTransaction={typeTransaction} />
      <InfoComponent DataTransaction={statusTransaction} />
      <InfoComponent DataTransaction={startDate} />
      <InfoComponent DataTransaction={endDate} />
      <InfoComponent DataTransaction={amountToUse} />
      <InfoComponent DataTransaction={currentCripto} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
});
