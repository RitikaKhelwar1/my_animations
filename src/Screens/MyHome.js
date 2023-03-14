import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import WrapperContainer from '../Components/WrapperContainer';

const MyHome = () => {
  const colors = [
    '#51D47B',
    '#CA3999',
    'rgb(213,178,99)',
    'rgb(154,197,219)',
    '#393E46',
    '#67541D',
    '#2183D4',
    '#51D47B',
    '#CA3999',
    'rgb(213,178,99)',
    'rgb(154,197,219)',
    '#393E46',
    '#67541D',
    '#2183D4',
    '#51D47B',
    '#CA3999',
    'rgb(213,178,99)',
    'rgb(154,197,219)',
    '#393E46',
    '#67541D',
    '#2183D4',
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View style={{...styles.animationCont, backgroundColor: colors[index]}}>
        <Text style={{color: 'white', fontSize: textScale(14)}}>{item}</Text>
      </View>
    );
  };
  return (
    <WrapperContainer paddingAvailable={false}>
      <ImageBackground
        source={{uri: 'https://wallup.net/wp-content/uploads/2018/03/19/580282-iOS-Ipod-iPad-iPhone-748x1330.jpg'}}
        resizeMode="cover"
        style={styles.image}>
        <View style={{marginHorizontal:moderateScale(16)}} >
            <Text style={styles.mainText} >My Animations</Text>
          <FlatList
            data={['type 1', 'type 2', 'type 3', 'type 4', 'type 5', 'type 6']}
            renderItem={_renderItem}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        </View>
      </ImageBackground>
    </WrapperContainer>
  );
};

export default MyHome;

const styles = StyleSheet.create({
  animationCont: {
    marginTop: moderateScaleVertical(16),
    padding: moderateScale(16),
    borderRadius: moderateScale(16),
  },
  image: {
    // flex: 1,
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  mainText:{
      fontSize:textScale(22),
      textAlign:"center",
      marginVertical:moderateScaleVertical(20),
      fontWeight:"700"
  }
});
