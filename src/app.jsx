import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./assets/iconfont/iconfont.css";
import "./app.scss";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      "pages/index/index",
      "pages/index/index2",
      "pages/index/index3",
      "pages/index/index4"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      list: [
        {
          text: "首页",
          pagePath: "pages/index/index",
          selectedIconPath: "./assets/images/icon_tab1_actived.png",
          iconPath: "./assets/images/icon_tab1.png"
        },
        {
          text: "直播",
          pagePath: "pages/index/index1",
          selectedIconPath: "./assets/images/icon_tab2_actived.png",
          iconPath: "./assets/images/icon_tab2.png"
        },
        {
          text: "品牌分类",
          pagePath: "pages/index/index2",
          selectedIconPath: "./assets/images/icon_tab3_actived.png",
          iconPath: "./assets/images/icon_tab3.png"
        },
        {
          text: "购物车",
          pagePath: "pages/index/index3",
          selectedIconPath: "./assets/images/icon_tab4_actived.png",
          iconPath: "./assets/images/icon_tab4.png"
        },
        {
          text: "我的",
          pagePath: "pages/index/index4",
          selectedIconPath: "./assets/images/icon_tab5_actived.png",
          iconPath: "./assets/images/icon_tab5.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
