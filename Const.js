import {
    Platform,
    PixelRatio,
    Dimensions
} from 'react-native';

export default class Const {

    static mScreenWidth = Dimensions.get('window').width;
    static mScrennHeight = Dimensions.get('window').height;
    static leftMemuWidth = Const.getSize(270)
    static mainColor = '#1097d5'

    static getScreenWidth() {
        return Dimensions.get('window').width;
    }

    static getSize(size) {
        return parseInt(Const.getScreenWidth() * size / 375);
    }

}