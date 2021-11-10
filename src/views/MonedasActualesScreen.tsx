import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {getFees, getAltcoins} from '../Api/conectApi';

export const MonedasActualesScreen = () => {
  const [comisiones, setComisiones] = useState({});
  const [altcoins, setAltcoins] = useState<[string, any][]>([]);

  useEffect(() => {
    getFees().then(res => setComisiones(res));
    getAltcoins().then(res => {
      const temp = Object.entries(res.names);
      setAltcoins(temp);
    });
  }, []);

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
          altcoins.map((criptos: [string, any][], i: number) => {
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
