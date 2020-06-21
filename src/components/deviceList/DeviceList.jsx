import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Device from "./Device";
import {getDevices} from "../../actions/device";

const DeviceList = () => {
    const dispatch = useDispatch()
    const devices = useSelector(state => state.deviceReducer.devices)

    useEffect(()=>{
        dispatch(getDevices())
    }, [])

    return (
        <ScrollView>
            {devices.map(device=>
                <Device key={device.id} device={device}/>
            )}
        </ScrollView>
    );
};

export default DeviceList;

