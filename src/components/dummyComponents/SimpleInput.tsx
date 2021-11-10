import React, {FunctionComponent, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  titleInput: string;
  titlePlaceholder: string;
  onChange: (text: string) => void;
  textValue: string;
  onSubmit?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

export const SimpleInput: FunctionComponent<Props> = ({
  titleInput,
  titlePlaceholder,
  onChange,
  textValue,
  onSubmit,
}) => {
  const [isFocused, setIsFocused] = useState<Boolean>(false);

  let borderColor = isFocused ? '#0035FF' : '#DDE1E6';

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    if (textValue === '') {
      setIsFocused(false);
    }
  };
  return (
    <View>
      <Text style={styles.textoInput}>{titleInput}</Text>
      <TextInput
        autoCapitalize="none"
        placeholder={titlePlaceholder}
        style={[styles.inputBase, {borderColor: borderColor}]}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        value={textValue}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textoInput: {
    fontSize: 16,
    marginVertical: 10,
  },
  inputBase: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    fontSize: 17,
    height: 48,
    backgroundColor: 'white',
    color: 'black',
    marginVertical: 10,
  },
});
