import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native'


export default function ShowCount() {

    const [count,SetCount] = useState(0)

    function Contador() {
        SetCount(count + 1)
    }

    return(
        <View style={styles.ShowCountContainer}>
            
            <Text style={styles.ValueLabel}> Valor: {count} </Text>
            <Button title={'Clique'} onPress={Contador}/>

        </View>
    )
}


const styles = StyleSheet.create({
    ValueLabel : {
        fontSize: 20
    },
  });
  