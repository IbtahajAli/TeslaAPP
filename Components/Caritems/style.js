import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    carcontainer:{
        height:'200%',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
      },
      titles:{
        width:'100%',
        alignItems:'center',
        marginTop:'30%',
      },
      title:{
        fontSize:40,
        fontWeight:"500",
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62',
      },
      subtitleCTA:{
        textDecorationLine:'underline',
        fontSize:16,
        justifyContent:'center',
        alignItems:'center',
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      buttonscontainer:{
        position:'absolute',
        bottom:'9%',
        width:'100%',
      },
});

export default styles;