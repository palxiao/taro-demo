import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { assetsPath } from "../../utils";

import "./index.scss";

const c1 = assetsPath("images/temp/c6.png");
const c2 = assetsPath("images/temp/c7.png");
const c3 = assetsPath("images/temp/c3.png");
const c4 = assetsPath("images/temp/c4.png");
const c5 = assetsPath("images/temp/c5.png");
const ad1 = assetsPath("images/temp/ad1.jpg");

export default class AppNav extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    list: [
      { icon: c1, text: "营养保健" },
      { icon: c2, text: "速食生鲜" },
      { icon: c3, text: "速食生鲜" },
      { icon: c4, text: "家居厨卫" },
      { icon: c5, text: "个护美妆" }
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='app-nav'>
        <View className='app-nav-list'>
          {this.state.list.map((e, index) => (
            <View key={index} className='app-nav-list-item'>
              <View className='img'>
                <Image
                  src={e.icon}
                  mode='aspectFill'
                  style='width: 100%;height: 100%;'
                ></Image>
              </View>
              <View className='font20 pt10'>{e.text}</View>
            </View>
          ))}
        </View>
        <Image
          src={ad1}
          style={{ height: "95px", width: "100%" }}
          className='mt20'
        ></Image>
      </View>
    );
  }
}
