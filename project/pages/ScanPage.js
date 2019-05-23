import React from 'react';
import {
    View, Text, StyleSheet,
} from 'react-native';

import BaseComponent from './BaseComponent';
import NavigationBar from '../views/NavigationBar';
import ViewUtils from "../utils/ViewUtils";

export default class ScanPage extends BaseComponent {
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
                title={'扫描'}
                statusBar={statusBar}
                leftButton={ViewUtils.getLeftButton(
                    () => {
                        this.props.navigation.goBack();
                    }
                )}
            />;
        return (
            <View style={{flex: 1}}>
                {navigationBar}
                <View style={styles.container}>
                    <Text>扫描</Text>
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