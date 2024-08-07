import {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from "react-native-snap-carousel";
import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';
// import Form from './Form';

const SLIDER_WIDTH = Dimensions.get('windows'.width);

const Slider = () => {
  const carouselRef = useRef(null);
  const renderItem = ({item}) => {
    return (
        <View style={styles.itemContainer}>
          {item}
        </View>
      );
  };
  return(
    <Carousel
      ref={carouselRef}
      data={[<Home/>,<Home1/>,<Home2/>]}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={SLIDER_WIDTH}
      loop={true}
    />
  )
};
styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default Slider;
