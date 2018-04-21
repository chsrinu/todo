import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CustomTextInput from '../commonComponents/CustomTextInput';
import { Button } from '../commonComponents';
import * as actionCreators from '../actions';

class AddItem extends Component {
componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    //this.props.saveToAsync();
    //console.log('save the data');
}

handleBackButton() {
    //ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
}
checkItemName() {
  if (this.props.todoItem) {
    ToastAndroid.show('Saved the Todo item', ToastAndroid.SHORT);
    this.props.addItemToList();
    //Actions.refresh({ key: 'main' });
  }
}
render() {
  //console.log('additem', this.props.todoItem);
    return (
      <View style={styles.containerStyle}>
        <CustomTextInput value={this.props.todoItem} floatingText='Enter your item' alignment='left' textColor='black' todoItem />
        <Button onPress={() => this.checkItemName()}> + Add Todo</Button>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
  }
};
function mapStateToProps(state) {
    return { todoItem: state.data.currentItem };
}
export default connect(mapStateToProps, actionCreators)(AddItem);
