import React from 'react'
import { FlatList,Dimensions} from 'react-native';
import Caritem from '../Caritems'
import styles from './style';
import cars from './cars';
import { View } from 'react-native';

const Carlist = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item})=> <Caritem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
};

export default Carlist;
