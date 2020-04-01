import Taro, {Component} from '@tarojs/taro';
import {View, Image, ScrollView} from '@tarojs/components';
import {assetsPath} from '../../utils';
import ListItem from '../ListItem/Index.jsx';
import ProductCard from '../ProductCard/Index.jsx';
import './index.scss';
import JsonData from '../../Json';

export default class Seckill extends Component {
  static options = {
    addGlobalClass: true,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    list: JsonData.goodsList,
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let scrollTop = 0;
    const scrollStyle = {
      height: '235px',
      width: '100%',
    };
    return (
      <View className='home-seckill bgfff pb30 m20'>
        <ListItem className='mt20'>
          <Image
            style={{width: '70px', height: '18px'}}
            mode='aspectFit'
            src={assetsPath('images/temp/secskill-img.jpg')}
          ></Image>
          <View className='font30 pl30 color999'>8点场</View>
        </ListItem>

        <ScrollView
          scrollStyle={scrollStyle}
          className='scrollview'
          scrollX
          scrollWithAnimation
          scrollLeft={scrollTop}
        >
          <View className='list-container'>
            {this.state.list.map((e, index) => (
              <ProductCard
                className='ml30'
                width='100px'
                key={'key' + index}
                taroKey={index}
                title={e.title}
                src={e.image}
                price={e.price}
                originalPrice={e.originalPrice}
              ></ProductCard>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
