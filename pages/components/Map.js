import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoic3ZhbGVuY2lhOTYiLCJhIjoiY2t2bG85NWc0YzV1YTJwdDl2eGo0ZXY0eiJ9.qOWuNC71r_8dyu54nVmhLA";
const map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
          center: [-99.29011, 39.39172],
          zoom: 3,
        });
      });
  return <Wrapper id='map'></Wrapper>;
};

export default map;

const Wrapper = tw.div`
flex-1`


