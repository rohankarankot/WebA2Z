import axios from "axios";

export const getUserLocation = async (setLocation) => {

    await navigator.geolocation.getCurrentPosition((data) => {
        setLocation(data)
        axios
            .request({
                method: "get",
                url: `https://us1.locationiq.com/v1/reverse?key=${process.env.LOCATIONQ_KEY}&lat=${data.coords.latitude}&lon=${data.coords.longitude}&format=json&`,
            })
            .then((response) => {
                setLocation(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })
};
