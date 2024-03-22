import React from "react";
import { TouchableOpacity, Text } from "react-native"


export const Button = ({ title, onPress, ...rest }: any) => {
    return (
        <TouchableOpacity {...rest} onPress={onPress} style={{
            backgroundColor: '#e52f35',
            borderRadius: 10,
            padding: 10
        }} accessible={true}
            accessibilityLabel={`Click me to ${title}`} accessibilityHint={`Navigates you to ${title} page`}>
            <Text style={{ fontSize: 20, marginVertical: 5, textAlign: 'center', color: '#fff' }}> {title}</Text>

        </TouchableOpacity>
    )
}