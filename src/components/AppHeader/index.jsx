import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class AppHeader extends Component {
  static options = {
    addGlobalClass: true
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { className } = this.props;
    return (
      <View className={"app-header " + className}>
        <View className='icon iconfont icon-scan'></View>
        <View className='input-container'>
          <View className='iconfont icon-search'></View>
          <input className='input' placeholder='请输入地址'></input>
        </View>
        <View className='icon iconfont icon-message'></View>
      </View>
    );
  }
}
