import React from 'react'
import { View,Text,Pressable} from 'react-native'
import styles from './style';

const Stylebutton =(props)=>{
    const {type,content,onpress} = props;

    const backgroundColor = type === 'primary' ? 'black' : '#FFFFFFA6';
    const textcolor = type === 'primary' ? '#FFFFFF' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:backgroundColor}]}
                onPress={()=>onpress()}
            >
                <Text style={[styles.text,{color:textcolor}]}>{content}</Text>
            </Pressable>
            
        </View>
    );
};

export default Stylebutton;
