import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image, TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';

// const
const UNIT_BLOCK_WIDTH = Sizes.Width * 2 / 3;

export default class StartupBlock extends React.Component {
  render() {
    return (
      <Animatable.View
        animation='fadeInUp'
        delay={Math.floor((Math.random() * 500) + 1)}>
        <TouchableOpacity onPress={Actions.companyInfo}>
          <Image
            resizeMode='cover'
            source={this.props.cover && {uri: this.props.cover}}
            style={[
              styles.container,
              this.props.scale && {
                width: UNIT_BLOCK_WIDTH * this.props.scale}]} />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.Width / 3,
    width: UNIT_BLOCK_WIDTH,
    marginRight: Sizes.InnerFrame,
    marginBottom: Sizes.InnerFrame,
    backgroundColor: Colors.MenuBackground
  }
});
