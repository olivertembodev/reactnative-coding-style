import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text
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

export default class Tag extends React.Component {
  render() {
    return (
      <View style={[
        styles.container, this.props.color && {
          backgroundColor: this.props.color,
          borderColor: this.props.color
        }, this.props.outline && {
          backgroundColor: Colors.Transparent}]}>
        <Text style={[
          Styles.Text, Styles.SmallText, Styles.Emphasized,
          styles.label, this.props.outline && {
            color: this.props.color || Colors.Accent},
          this.props.fontColor && {
            color: this.props.fontColor}]}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 3,
    marginBottom: 2,
    paddingHorizontal: Sizes.InnerFrame / 2,
    paddingVertical: Sizes.InnerFrame / 3,
    backgroundColor: Colors.Accent,
    borderColor: Colors.Accent,
    borderWidth: 1,
    // borderRadius: 15
  }
});
