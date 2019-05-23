import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import BaseComponent from './BaseComponent';
import NavigationBar from '../views/NavigationBar';
import ViewUtils from "../utils/ViewUtils";

export default class HomePage extends BaseComponent {
    componentDidMount() {
        super.componentDidMount();
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
                title={'产品'}
                statusBar={statusBar}
                rightButton={ViewUtils.getMoreButton(
                    () => {
                        this.props.navigation.navigate('ScanPage');
                    }
                )}
            />;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <Text>产品</Text>
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