import { View, StyleSheet, Text } from 'react-native';

export function HomeOne(){
    return <View style={styles.container}>
   
                            <Text>Hello This is HomePage</Text>

          </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
    },
  });