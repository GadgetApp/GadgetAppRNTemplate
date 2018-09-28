/**
 * Created by GadgetApp on 12-09-2018.
 */

// @flow
import React from "react";
import {Text, TouchableHighlight, View} from "react-native";
import consts from "../const";
import colors from "../resources/colors";


export default class RepositoryListItem extends React.PureComponent {

  _onPress = () => {
    const {navigate} = this.props.navigation;
    navigate(consts.REPOSITORY_DETAILS_SCREEN, {repository: this.props.repository})
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress}>
        <View style={itemStyles.itemStyle} {...this.props}>
          <Text style={itemStyles.itemTitleStyle}>{this.props.title}</Text>
          <Text style={itemStyles.itemDescriptionStyle}>{this.props.description}</Text>
        </View>
      </TouchableHighlight>
    )
  }

}

const itemStyles = {
  itemStyle: {
    marginHorizontal: 4,
    borderColor: 'lightgrey',
    elevation: 4,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 120,
    backgroundColor: colors.primaryColor
  },
  itemTitleStyle: {
   
    color: colors.accentColor,
    fontSize: 25,
    padding: 10,
    fontWeight:'400'
  },
  itemDescriptionStyle: {
    color: 'darkgrey',
    fontSize: 15,
    paddingLeft: 10,
    fontWeight:'200'
  }
};