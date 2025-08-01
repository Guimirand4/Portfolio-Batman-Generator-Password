import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import passwordService from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'; 

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let password = passwordService();
    setPass(password);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
          <BatTextInput pass={pass}/>
        <Pressable  onPress={handleGenerateButton}
        style={styles.button}>
        <Text style={styles.text}>Generate</Text>
        </Pressable>

        <Pressable  onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>Copy</Text>
        </Pressable>
    </>
  );
}