import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar,
  StyleSheet, View
} from 'react-native';

import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';



const WrapperContainer = ({
  children,
  statusBarAvailable = true,
  isSafeAreaAvailable = true,
  onlyScrollViewAvailable = false,
  scrollViewBouncesEnable = false,
  paddingAvailable = true,
  mainViewStyle,
  refreshControl,
  contentContainerStyle
}) => {
  function WithOnlyScrollView() {
    return (
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        onResponderMove={() => console.log('hellojhjkhkjhkj')}
        bounces={scrollViewBouncesEnable}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: moderateScale(60), flexGrow: 1,...contentContainerStyle}}
        refreshControl={refreshControl}
        >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        ...styles.container,
        paddingHorizontal: paddingAvailable ? moderateScale(16) : 0,
        ...mainViewStyle,
      }}>
      {statusBarAvailable ? (
        <StatusBar
          animated={true}
          backgroundColor={isSafeAreaAvailable ? colors.white : colors.themeBg}
          barStyle={!isSafeAreaAvailable ? 'light-content' : 'dark-content'}
          showHideTransition={'none'}
          hidden={false}
        />
      ) : (
        <></>
      )}
      {isSafeAreaAvailable ? <SafeAreaView /> : <></>}
      {onlyScrollViewAvailable ? WithOnlyScrollView() : children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default React.memo(WrapperContainer);
