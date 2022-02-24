import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {ContextApi} from '../context/ContextApi';
import {CardComponent} from '../components/dummyComponents/CardComponent';
import {SimpleTitle} from '../components/dummyComponents/SimpleTitle';

export const MonedasActualesScreen = () => {
  const {comisiones, altcoins} = useContext(ContextApi);

  const {fastestFee, halfHourFee, hourFee}: any = comisiones;
  return (
    <View style={globalStyles.globalMargin}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {comisiones ? (
          <>
            <SimpleTitle title="Comisiomes actuales en la plataforma:" />
            <Text>Comisión Rapida: {fastestFee} USD</Text>
            <Text>Comisión de Media Hora: {halfHourFee} USD</Text>
            <Text>Comisión por Hora: {hourFee} USD</Text>
          </>
        ) : (
          <Text>Cargando...</Text>
        )}
        <View>
          <SimpleTitle title="Monedas actuales en la plataforma: " />
          {altcoins &&
            altcoins.map((criptos: any, i: number) => {
              const [pair, value] = criptos;
              return (
                <CardComponent
                  key={i}
                  infoUser={`Simbolo: ${pair}, Descripción: ${value.name}`}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};
