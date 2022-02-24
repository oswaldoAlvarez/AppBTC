import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

interface Props {
  explicationTitle?: string;
  infoUser?: number | string;
}

export const CardComponent: FunctionComponent<Props> = ({
  explicationTitle,
  infoUser,
}) => {
  return (
    <View style={styles.cardInfo}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Text style={styles.textCard}>
          {explicationTitle}
          {explicationTitle ? ': ' : null}
          {infoUser}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginRight: 5,
  },
  textCard: {
    fontSize: 16,
  },
});
