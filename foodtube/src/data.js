export const API_KEY = 'AIzaSyAOjwLV6E5i_tYI9uPSCdV3oFzyWrYLg0U';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
}