import React, {FunctionComponent, useContext, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {globalStyles, ThemeBackground} from '../theme/appTheme';
import {SimpleInput} from '../components/dummyComponents/SimpleInput';
import {SimpleTitle} from '../components/dummyComponents/SimpleTitle';
import {CardComponent} from '../components/dummyComponents/CardComponent';
import {useForm} from '../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';

import {ContextApi} from '../context/ContextApi';

interface Props extends StackScreenProps<any, any> {}

export const TransaccionesScreen: FunctionComponent<Props> = ({navigation}) => {
  const {usuarioPrincipal, sendCripto} = useContext(ContextApi);

  const {userToSendBTC, amountToSend, onChange} = useForm({
    userToSendBTC: '',
    amountToSend: '',
  });
  const [actuallyAmount, setActuallyAmount] = useState<string>(
    usuarioPrincipal.BTC,
  );
  const [actuallyTrader, setActuallyTrader] = useState<string>(
    usuarioPrincipal.firstName,
  );

  const sendingCripto = () => {
    sendCripto(
      userToSendBTC,
      setActuallyTrader,
      setActuallyAmount,
      amountToSend,
      actuallyTrader,
    );
  };

  return (
    <View style={globalStyles.globalMargin}>
      <SimpleTitle title="Aquí podrá visualizar su información" />
      <ScrollView horizontal={true}>
        <CardComponent
          explicationTitle="Nombre"
          infoUser={usuarioPrincipal.firstName}
        />
        <CardComponent
          explicationTitle="Apellido"
          infoUser={usuarioPrincipal.lastName}
        />
        <CardComponent
          explicationTitle="Cantidad de BTC"
          infoUser={actuallyAmount}
        />
        <CardComponent
          explicationTitle="Precio 1 BTC a pesos"
          infoUser={JSON.stringify(usuarioPrincipal.ARSBTC)}
        />
      </ScrollView>
      <SimpleTitle title="¿Quieres hacer una transacción?" />
      <SimpleInput
        onChange={value => onChange(value, 'userToSendBTC')}
        textValue={userToSendBTC}
        titlePlaceholder="Ej:17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem"
        titleInput="¿A que billetera querés enviar tus BTC?"
        onSubmit={sendingCripto}
      />
      <SimpleInput
        onChange={value => onChange(value, 'amountToSend')}
        textValue={amountToSend}
        titlePlaceholder="Ej: 100"
        titleInput="¿Que cantidad de BTC quieres enviar?"
        onSubmit={sendingCripto}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btnForm}
        onPress={() => navigation.navigate('HistorialScreen')}>
        <Text style={styles.btnText}>
          Visualizar historial de transacciones
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnForm: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: ThemeBackground,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});
