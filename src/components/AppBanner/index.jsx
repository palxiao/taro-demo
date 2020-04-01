import Taro, { Component } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { assetsPath } from "../../utils";
import "./index.scss";

const banner1 = assetsPath("images/temp/banner1.jpg");
const banner2 = assetsPath("images/temp/banner2.jpg");
const banner3 = assetsPath("images/temp/banner3.jpg");

export default class AppHeader extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    current: 1,
    list: [
      { src: banner1, bgColor: "rgb(203, 87, 60)" },
      { src: banner2, bgColor: "rgb(205, 215, 218)" },
      { src: banner3, bgColor: "rgb(183, 73, 69)" }
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = e => {
    this.setState(e.detail);
  };

  render() {
    return (
      <View
        className='app-banner'
        style={{
          "background-color": this.state.list[this.state.current].bgColor
        }}
      >
        <Swiper
          indicatorDots
          indicatorColor='#ccc'
          className='app-banner-swiper'
          autoplay
          circular
          onChange={this.onChange}
          current={this.state.current}
        >
          {this.state.list.map(e => (
            <SwiperItem>
              <View className='banner-item'>
                <Image
                  className='banner-item-img'
                  style='width: 100%;height: 100%;'
                  mode='widthFix'
                  src={e.src}
                />
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    );
  }
}
