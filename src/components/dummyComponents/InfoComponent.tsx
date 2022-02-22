import React, {FunctionComponent} from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  DataTransaction: string | undefined;
}

export const InfoComponent: FunctionComponent<Props> = ({DataTransaction}) => {
  return <Text style={styles.textCard}>{DataTransaction}</Text>;
};
const styles = StyleSheet.create({
  textCard: {
    fontSize: 16,
  },
});
