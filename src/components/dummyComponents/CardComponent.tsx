import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  explicationTitle: string;
  infoUser: string;
}

export const CardComponent: FunctionComponent<Props> = ({
  explicationTitle,
  infoUser,
}) => {
  return (
    <View style={styles.cardInfo}>
      <Text style={styles.textCard}>
        {explicationTitle}: {infoUser}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginRight: 5,
  },
  textCard: {
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
});
