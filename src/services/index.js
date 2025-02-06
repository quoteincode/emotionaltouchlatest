import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default async function callApi(url, params = {}) {
    let method = params?.method || "GET";
    let headers = {
        Accept: "application/json",
        ContentType: "application/json",
    };

    let data = params?.data || {};

    if (!params?.isGuest) {
        let token = await AsyncStorage.getItem("@token");
        headers['Authorization'] = `Bearer ${token}`;
    }
    if(params?.ContentType) {
        headers['Content-Type'] = params.ContentType;
    }
    
    let instance = axios.create({
        baseURL: API_BASE_URL,
        timeout: params?.timeout ? params.timeout * 1000 : 250000, // Adjusted timeout
        headers,
    });
    // console.log("data in index================================");
    console.log('Axios Instance Config:', {
        baseURL: instance.defaults.baseURL,
        timeout: instance.defaults.timeout,
        headers: instance.defaults.headers,
        url: url,
        method: method,
        data: data,
    });
    console.log("================================");
    return instance.request({
        url,
        method,
        data,
    })
        .then((res) => {
            console.log("res data",url)
            return { success: true, data: res.data };
        })
        .catch((err) => {
            console.warn(err)
            return {
                success: false,
                error: err, // Improved error handling
            };
        });
}