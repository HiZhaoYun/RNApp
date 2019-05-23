import React, {Component} from 'react';
import {
    DeviceEventEmitter,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.baseListener = DeviceEventEmitter.addListener('SHOW_TOAST', (text) => this.showToast(text));
    }

    showToast(text) {
        this.toast.show(text, DURATION.LENGTH_SHORT);
    }

    componentWillUnmount() {
        if (this.baseListener) {
            this.baseListener.remove();
        }
    }

    getToast() {
        return (
            <Toast
                ref={(toast) => this.toast = toast}
                position={'center'}
            />
        );
    }
}
