import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "../Home/Style"
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.LogoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <BatTextInput />
                <BatButton/>
            </View>
            <Text>

            </Text>
            <StatusBar style="light" />
        </View>
    );
}



