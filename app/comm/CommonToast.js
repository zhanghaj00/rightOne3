/**
 * Created by zhanghao on 2016/10/26.
 */
import { AlertIOS, ToastAndroid, Platform } from 'react-native';

export function showToast(showMsg) {
    if (Platform.OS === 'android') {
        // Android
        ToastAndroid.show(showMsg, ToastAndroid.SHORT);
    } else {
        // iOS TODO 待实现
    }
}