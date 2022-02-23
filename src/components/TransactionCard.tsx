import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StateHistory} from '../interface/interfaces';
import {EnumTransaction} from '../interface/types';

export const TransactionCard: FunctionComponent<StateHistory> = ({
  id,
  account,
  type,
  status,
  startDate,
  endDate,
  amount,
  currency,
  recipientAddress,
  fastestFee,
}) => {
  return (
    <>
      {status === EnumTransaction.FAIL ? (
        <View style={styles.cardInfo}>
          <Text style={styles.textCard}>Tipo de transacción: {type}</Text>
          <Text style={styles.textCard}>
            Estado de la transacción: {status}
          </Text>
        </View>
      ) : (
        <View style={styles.cardInfo}>
          <Text style={styles.textCard}>Transacción: {id}</Text>
          <Text style={styles.textCard}>Cuenta: {account}</Text>
          <Text style={styles.textCard}>Tipo de transacción: {type}</Text>
          <Text style={styles.textCard}>
            Estado de la transacción: {status}
          </Text>
          <Text style={styles.textCard}>Fecha de envío: {startDate}</Text>
          <Text style={styles.textCard}>Fecha de llegada: {endDate}</Text>
          <Text style={styles.textCard}>Monto enviado: {amount}</Text>
          <Text style={styles.textCard}>Moneda enviada: {currency}</Text>
          <Text style={styles.textCard}>
            Comisión de la transacción:{' '}
            {`${String(fastestFee).padStart(7, 0)} ${currency}`}
          </Text>
          <Text style={styles.textCard}>
            Cuenta a recibir: {recipientAddress}
          </Text>
        </View>
      )}
    </>
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
  textCard: {
    fontSize: 12,
  },
});
