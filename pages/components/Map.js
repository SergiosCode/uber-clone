import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoic3ZhbGVuY2lhOTYiLCJhIjoiY2t2bG85NWc0YzV1YTJwdDl2eGo0ZXY0eiJ9.qOWuNC71r_8dyu54nVmhLA";
const map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default map;

const Wrapper = tw.div`
flex-1 h-1/2`;
