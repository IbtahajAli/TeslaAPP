import React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './style';
import Stylebutton from '../Stylebutton';

const Caritem =(props)=>{
    const {name,tagline,taglineCTA,image}=props.car;
    return (
        <View style={styles.carcontainer}>

            <ImageBackground source={image} style={styles.image}/>

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}> {tagline} {' '}

                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>

                </Text>

            </View>

            <View style={styles.buttonscontainer}>

            <Stylebutton 
                type='primary'
                content={"Custom Order"}
                onpress={()=>{
                    console.warn('Custom Order was Pressed')
                }}

            />
            <Stylebutton 
                type='secondary'
                content={"Exisiting Inventory"}
                onpress={()=>{
                    console.warn('Exisiting Inventory was Pressed')
                }}

            />
            
            </View>
            
        </View>
    );
};

export default Caritem;