import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View >
        <Button onPress={()=> {console.log("ola")}}
        title='Click Here'
        accessibilityLabel='Click'>   
        </Button>
        <Pressable  onPress={()=> {console.log("pressable")}}style={styles.button}>
        <Text style={styles.text}>Generate</Text>
        </Pressable>
        
        <Pressable  onPress={()=> {console.log("pressable")}} style={styles.button}>
        <Text style={styles.text}>Copy</Text>
        </Pressable>
    </View>
  );
}