import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Linking, Text, View, Image, Button } from 'react-native';

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

      <StatusBar style="auto" />
      </View>
      
    
  );
}


const styles = StyleSheet.create({
  button:{
    padding:20
  },
  subtext:{
    textAlign:'center',
    paddingBottom:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


