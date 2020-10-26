const searchCountryURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=";
const searchLocationURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=";
const searchIdURL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";
export const searchCity = (x, y) => {
    if (y)
        return fetch(searchLocationURL + x + "," + y)
            .then((res) => res.json())
            .then((data) => data.map((x) => ({ name: x.title, id: x.woeid })));
    else
        return fetch(searchCountryURL + x)
            .then((res) => res.json())
            .then((data) => data.map((x) => ({ name: x.title, id: x.woeid })));
};

export const getWeathers = (id) => {
    return fetch(searchIdURL + id)
        .then((res) => res.json())
        .then((data) => data.consolidated_weather);
};

export const convertToF = (celsius) => {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
};
