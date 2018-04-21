import React, { Component } from 'react';
import { View,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Header, ImageButton } from '../commonComponents';
import CustomTextInput from '../commonComponents/CustomTextInput';

import { Images } from '../images';

class Login extends Component {

checkName() {
  if (this.props.userName) {
    Actions.main({ isNew:true, userName: this.props.userName, title: this.props.userName + "'s Todo" });
  }
}
async componentWillMount() {
  name = await AsyncStorage.getItem('userName');
  if(name)
    Actions.main({ isNew:false, userName: name, title: name + "'s Todo" });
}

render() {
 return (
  <View style={{ flex: 1, justifyContent: 'space-around' }}>
    <Header label={'TODO'} />
    <View style={{ flex: 0.5, alignItems: 'center' }}>
      <CustomTextInput userNameFlag value={this.props.userName} />
      <ImageButton imgSrc={Images.loginButtonImage} onPress={() => this.checkName()} />
    </View>
  </View>
);
  }
}
function mapStateToProps(state) {
  return { userName: state.loginStatus.userName };
}
export default connect(mapStateToProps)(Login);
