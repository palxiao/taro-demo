import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { assetsPath } from "../../utils";

import AppHeader from "../../components/AppHeader";
import AppBanner from "../../components/AppBanner";
import AppNav from "../../components/AppNav";
import ProductCard from "../../components/ProductCard/Index.jsx";
import Seckill from "../../components/HomeSeckill/Index";
import ListItem from "../../components/ListItem/Index";
import JsonData from "../../Json";

import "./index.scss";

export default class Index extends Component {
  config = {
    addGlobalClass: true,
    navigationBarTitleText: "首页"
  };

  state = {
    list1: JsonData.goodsList,
    isScrollTop: true,
    loading: false
  };

  pageScrollFn = scrollTop => {
    this.setState({ isScrollTop: scrollTop === 0 });
  };

  onPageScroll(e) {
    console.log('e', e)
    this.pageScrollFn(e.scrollTop);
  }

  onReachBottom() {
    console.log('onReachBottom')
    let list1 = [].concat(this.state.list1, JsonData.goodsList);
    this.setState({loading: true}, 
      () => this.setState({
        list1
      },
        () => this.setState({loading: false})
      )
    );
  }

  componentWillMount() {}

  componentDidMount() {
    // 只有编译为h5时下面代码才会被编译
    if (process.env.TARO_ENV === "h5") {
      window.addEventListener("scroll", this.pageScrollFn);
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let { isScrollTop } = this.state;
    return (
      <View className='home'>
        <AppHeader className={isScrollTop ? "" : "scroll"} />
        <AppBanner />
        <AppNav />
        <Seckill />
        {/* 精品团购 */}
        <View className=' bgfff pb30'>
          <ListItem className='mt20 pt20 pb20'>
            <Image
              style={{ width: "30px", height: "30px" }}
              mode='aspectFit'
              src={assetsPath("images/temp/h1.png")}
            />
            <View className='font30 pl30 color999'>
              <View className='color333'>精品团购</View>
              <View className='font16'>Boutique group buying</View>
            </View>
          </ListItem>
          <ScrollView
            scrollStyle={{
              height: "235px",
              width: "100%"
            }}
            className='scrollview'
            scrollX
            scrollWithAnimation
          >
            <View className='list-container flex'>
              {this.state.list1.map((e, index) => (
                <ProductCard
                  className='ml30'
                  width='44vw'
                  key={"key" + index}
                  taroKey={index}
                  title={e.title}
                  src={e.image2}
                  price={e.price}
                  originalPrice={e.originalPrice}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        {/* 分类精选 */}
        <View className=' bgfff pb30'>
          <ListItem className='mt20 pt20 pb20'>
            <Image
              style={{ width: "60rpx", height: "60rpx" }}
              mode='aspectFit'
              src={assetsPath("images/temp/h1.png")}
            />
            <View className='font30 pl30 color999'>
              <View className='color333'>分类精选</View>
              <View className='font16'>Classified selection</View>
            </View>
          </ListItem>
          <ScrollView
            scrollStyle={{
              height: "470rpx",
              width: "100%"
            }}
            className='scrollview'
            scrollX
            scrollWithAnimation
          >
            <View className='list-container flex'>
              {this.state.list1.map((e, index) => (
                <ProductCard
                  className='ml30'
                  width='44vw'
                  key={"key" + index}
                  taroKey={index}
                  title={e.title}
                  src={e.image3}
                  price={e.price}
                  originalPrice={e.originalPrice}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        <View className=' bgfff pb30'>
          <ListItem className='mt20 pt20 pb20'>
            <Image
              style={{ width: "60rpx", height: "60rpx" }}
              mode='aspectFit'
              src={assetsPath("images/temp/h1.png")}
            />
            <View className='font30 pl30 color999'>
              <View className='color333'>猜你喜欢</View>
              <View className='font16'>Classified selection</View>
            </View>
          </ListItem>
          <View className='product-list'>
            {this.state.list1.map((e, index) => (
              <ProductCard
                className='ml30 mb10'
                width='332rpx'
                key={"key" + index}
                taroKey={index}
                title={e.title}
                src={e.image3}
                price={e.price}
                originalPrice={e.originalPrice}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}
