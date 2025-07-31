import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "../Home/Style"
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";


export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.LogoContainer}>
                <BatLogo />
            </View>
            <View>
                <BatTextInput />
            </View>
            <Text>

            </Text>
            <StatusBar style="auto" />
        </View>
    );
}



