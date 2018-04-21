import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dDimensions } from '../constants';
import * as actionsCreators from '../actions';

export class CustomTextInput extends Component {
  textInputChanged(temp) {
    console.log('customTextInput', temp);
    if (this.props.userNameFlag) {
      //console.log(temp);
      this.props.userNameChanged(temp);
    } else {
    //  console.log(temp);
      this.props.currentNewItem(temp);
    }
  }
  render() {
    const { floatingText = 'Your Name',
     alignment = 'center',
     underlineColor = 'grey',
     textColor = 'red',
      topMargin } = this.props;
    /*  if(clear)
        this.setState({ inputValue: '' });*/
    return (
      <TextInput
           style={[styles.EditStyle, { textAlign: alignment, marginTop: this.props.userNameFlag ? 0: dDimensions.inputTextMarginTop }]}
           underlineColorAndroid={underlineColor}
           placeholder={floatingText}
           value={this.props.value}
           clearButtonMode={this.props.userNameFlag ? 'never' : 'always'}
           placeholderTextColor={textColor}
           maxLength={20}
           onChange={(event) => this.textInputChanged(event.nativeEvent.text)}
      />
    );
  }
}
const styles = StyleSheet.create({
  EditStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    fontSize: dDimensions.fontSize
  }
});
export default connect(null, actionsCreators)(CustomTextInput);
