import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView, TouchableOpacity, Image
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

//components
import UppercasedText from '../../components/common/UppercasedText';

export default class TrackingCard extends React.Component {
  render() {
    return (
      <View style={[Styles.Card, Styles.EqualColumns]}>
        <Image
          source={{uri: this.props.image || ''}}
          resizeMode='contain'
          style={this.props.imageStyle || styles.image}>
        </Image>
        <View style={[styles.textContainer, this.props.archived && {justifyContent: 'space-between'}]}>
          <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Title]}>
            {this.props.status || ''}
          </UppercasedText>
          <View style={styles.row}>
            <Text style={[Styles.Text]}>
              {this.props.expected ? 'Expected ' : 'On '}
            </Text>
            <Text style={[Styles.Text]}>
              {this.props.statusDate || 'statusDate'}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  textContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  expected: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end'
  },

  status: {
    flex: 1,
    alignItems: 'flex-end'
  },

  row: {
    flexDirection: 'row'
  },

  image: {
    width: Sizes.Width / 4,
    height: Sizes.Width / 4
  }
});
