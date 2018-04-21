import React, { Component } from 'react';
import { View, Platform, UIManager, LayoutAnimation,Text } from 'react-native';
import { dDimensions } from '../constants';

export class List extends Component {
  constructor() {
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <View>
        <View style={{ justifyContent: 'center', height: dDimensions.height*0.08, backgroundColor: '#eceff1' }}>
          <Text style={{ paddingLeft: 10, fontSize: dDimensions.fontSize * 0.80 }}>{"Todo's"}</Text>
        </View>
        {this.props.children}
        <View style={{ height: dDimensions.height*0.08, backgroundColor: '#eceff1' }} />
      </View>
    );
}
}
//style={{
  /*      borderBottomWidth: dDimensions.height*0.08, borderBottomColor: '#eceff1', borderTopWidth: dDimensions.height*0.08, borderTopColor: '#eceff1' }}
      >
      <Text style={{ paddingLeft: 10, fontSize: dDimensions.fontSize * 0.80 }}>{"Todo's"}</Text>
      {this.props.children}
      </View>
    );
  }
}*/
