import React from 'react';
import {Image, View} from 'react-native';
const Flex = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source = {{uri:'https://picsum.photos/id/237/200/300'}}
        style = {{width:200, height: 200} }
        />
    </View>
  );
};


export default Flex;