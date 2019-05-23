import React from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';

import BaseComponent from './BaseComponent';
import NavigationBar from '../views/NavigationBar';
import ViewUtils from "../utils/ViewUtils";

export default class MinePage extends BaseComponent {

    componentDidMount() {
        super.componentDidMount();

        // Toast示例
        // setTimeout(function () {
        //     this.showToast('测试');
        // }.bind(this),1000);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        let statusBar = {
            barStyle: 'light-content',
        };
        let navigationBar =
            <NavigationBar
                title={'我的'}
                statusBar={statusBar}
                rightButton={ViewUtils.getShareButton(
                    () => {
                        this.props.navigation.navigate('SharePage');
                    }
                )}
            />;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                {this.getToast()}
                <View style={styles.container}>
                    <Text>我的</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});