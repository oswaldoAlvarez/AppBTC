import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

export const SimpleTitle: FunctionComponent<Props> = ({title}) => {
  return (
    <View>
      <Text style={styles.simpleTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  simpleTitle: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});
