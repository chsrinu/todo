import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Login from './Login';
import Main from './Main';
import AddItem from './AddItem';
import { Images } from '../images';
import * as actionCreators from '../actions';
import { dDimensions } from '../constants';

class RouterComponent extends Component {
  async userLoggedOut() {
    await AsyncStorage.clear();
    this.props.userLoggedOut();
    Actions.login();
  }
  render() {
    return (
      <Router>
        <Scene key='root' >
          <Scene
            key='login'
            component={Login}
            hideNavBar
          />
          <Scene
              key='tabContainer'
              left={() => null}
              onRight={() => this.userLoggedOut()}
              rightButtonImage={Images.logout}
              tabs
              tabBarPosition={'bottom'}
              labelStyle={{ alignSelf: 'center', color: 'black', marginBottom: dDimensions.tabLablePadding, fontSize: dDimensions.fontSize }}
          >
              <Scene
                key='main'
                component={Main}
                title='List'
                backgroundColor='white'
              />
              <Scene
                key='add'
                component={AddItem}
                title="Add todo's"
              />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default connect(null, actionCreators)(RouterComponent);
