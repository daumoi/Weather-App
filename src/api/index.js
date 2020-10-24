const searchCountryURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=";
const searchLocationURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=";
const searchIdURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";
export const searchCountry = (x, y) => {
    if (y) return fetch(searchLocationURL + x + "," + y);
    else return fetch(searchCountryURL + x);
};

export const getWeather = (id) => {
    return fetch(searchIdURL + id);
};
