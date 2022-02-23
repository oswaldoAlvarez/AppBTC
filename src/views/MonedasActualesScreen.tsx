import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {ContextApi} from '../context/ContextApi';

export const MonedasActualesScreen = () => {
  const {comisiones, altcoins} = useContext(ContextApi);

  const {fastestFee, halfHourFee, hourFee}: any = comisiones;
  return (
    <View style={globalStyles.globalMargin}>
      {comisiones ? (
        <>
          <Text>Comisiomes actuales en la plataforma:</Text>
          <Text>Comisión Rapida: {fastestFee} USD</Text>
          <Text>Comisión de Media Hora: {halfHourFee} USD</Text>
          <Text>Comisión por Hora: {hourFee} USD</Text>
        </>
      ) : (
        <Text>Cargando...</Text>
      )}
      <View>
        {altcoins &&
          altcoins.map((criptos: any, i: number) => {
            const [pair, value] = criptos;
            return (
              <Text key={i}>
                {pair}: {value.name}
              </Text>
            );
          })}
      </View>
    </View>
  );
};
