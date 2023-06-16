import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '-7.931122013418221',
          tr_latitude: tr_lat ? tr_lat : '-8.155500405678184',
          bl_longitude: bl_lng ? bl_lng : '-34.86063327899268',
          tr_longitude: tr_lng ? tr_lng : '-35.00780075482615',
          lunit: "km",
        },
        headers: {
          "X-RapidAPI-Key": "96dc37f949msh9281030d873cc19p1ca8dejsn51cc663b1e8e",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
