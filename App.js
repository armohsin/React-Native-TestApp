import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Linking, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  const titleText="Welcome to CybersolX";
  const bodyText = "Please wait...";

  return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={require('./assets/yy3.gif')}
        />
        {/* LOWER TEXT */}
        <Text style={styles.Heading}>
          Welcome to CybersolX
        </Text>
        <Text style={styles.subtext} >{bodyText}
        {"\n"}
        or{"\n"} click the Button below to Visit us{"\n"}
        </Text>
        <Button
          style={styles.button}
          title="Visit Us"
          onPress={()=>Linking.openURL('http://www.cybersolx.com')}    
        />
        {"\n"}
        
        {/* <Text>{showName()}</Text> */}
      <StatusBar style="auto" />
      </View>
      
    
  );
}

// const showName =()=>{
//   return "Asif Ali 004"
// }

const styles = StyleSheet.create({
  Heading:{
    fontSize:30,
    fontWeight:700,
    
  },
  // button:{
  //   backgroundColor:'purple'
  // },
  subtext:{
    textAlign:'center',
    paddingBottom:10,
    color:'blue'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


