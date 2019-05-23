/**
 * ViewUtils
 * @flow
 **/
'use strict';

import React  from 'react';
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ViewUtils {

    /**
     * 获取返回按钮
     * @param callBack
     * @returns {XML}
     */
    static getLeftButton(callBack) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../res/title/back_white_normal.png')}/>
        </TouchableOpacity>
    }

    static getRightButton(title, callBack) {
        return <TouchableOpacity
            style={{alignItems: 'center',}}
            onPress={callBack}>
            <View style={{marginRight: 10}}>
                <Text style={{fontSize: 20, color: '#FFFFFF',}}>{title}</Text>
            </View>
        </TouchableOpacity>
    }

    /**
     * 获取更多按钮
     * @param callBack
     * @returns {XML}
     */
    static getMoreButton(callBack) {
        return <TouchableHighlight
            underlayColor={'transparent'}
            ref="moreMenuButton"
            style={{padding: 5}}
            onPress={callBack}
        >
            <View style={{paddingRight: 8}}>
                <Image
                    style={{width: 24, height: 24,}}
                    source={require('../res/title/more_white_normal.png')}
                />
            </View>
        </TouchableHighlight>
    }

    /**
     * 获取分享按钮
     * @param callBack
     * @returns {XML}
     */
    static getShareButton(callBack) {
        return <TouchableHighlight
            underlayColor={'transparent'}
            onPress={callBack}
        >
            <Image
                style={{width: 20, height: 20,opacity:0.9,marginRight:10,tintColor:'white'}}
                source={require('../res/title/share_white_normal.png')}/>
        </TouchableHighlight>
    }
}