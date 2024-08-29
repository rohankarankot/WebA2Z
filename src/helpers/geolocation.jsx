import axios from "axios";

export const getUserLocation = async (setLocation) => {

    await navigator.geolocation.getCurrentPosition((data) => {
        setLocation(data)
        axios
            .request({
                method: "get",
                url: `https://us1.locationiq.com/v1/reverse?key=pk.35b5f73e3594bb5040aff02f200a5696&lat=${data.coords.latitude}&lon=${data.coords.longitude}&format=json&`,
            })
            .then((response) => {
                setLocation(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })


};

// 