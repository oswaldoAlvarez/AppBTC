import React, {FunctionComponent, useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {SimpleTitle} from '../components/dummyComponents/SimpleTitle';
import {CardHistory} from '../components/CardHistory';
import {globalStyles} from '../theme/appTheme';
import {ContextApi} from '../context/ContextApi';

export const HistorialScreen: FunctionComponent = () => {
  const {initialState} = useContext(ContextApi);
  return (
    <View style={globalStyles.globalMargin}>
      <ScrollView>
        <SimpleTitle title="Aquí podrá visualizar sus transacciones" />
        {initialState.history.map((story: any, i: any) => {
          return (
            <CardHistory
              key={i}
              explicationTitle={`Transaccion número: ${story.id}`}
              nameTrader={`Usuario: ${story.name}`}
              typeTransaction={`Tipo de transacción: ${story.type}`}
              statusTransaction={`Status de la transacción: ${story.status}`}
              startDate={`Fecha de envio: ${story.startDate}`}
              endDate={`Fecha de entrega: ${story.endDate}`}
              amountToUse={`Monto enviado: ${story.amount}`}
              currentCripto={`Tipo de moneda recibida: ${story.currency}`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
