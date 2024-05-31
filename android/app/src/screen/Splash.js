import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function Splash({ navigation }) {
  const randomUserID = String(Math.floor(Math.random() * 100000));
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={91279251}
        appSign={"d832df5f4e6be48535c7e4b8e6d7f462e9a9f27226926c4681d920aed0f8ab94"}
        userID={randomUserID}
        userName={'user_' + randomUserID}
        callID={"ZegoCloudOneOneOneVideoCall"} // callID can be any unique string. 
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => { navigation.navigate('HomeOne'); },
          onHangUp: () => { navigation.navigate('HomeOne'); },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
