import axios from 'axios'
import {setDevices} from "../reducers/deviceReducer";

const IP_ADDRESS = "192.168.0.13:8080"
export const getDevices = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://${IP_ADDRESS}/api/v1/devices/pagination`)
            dispatch(setDevices(response.data.devices))
        } catch (e) {
            console.log("ERROR")
        }
    }
}