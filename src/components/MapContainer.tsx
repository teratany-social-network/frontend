import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import React, { ReactNode } from "react";

type MapProps = {
  children?: ReactNode;
  className: string;
  width?: string;
  height?: string;
};

const MapContainerForm: React.FC<MapProps> = ({
  children,
  className,
  width,
  height,
}) => {
  return (
    <MapContainer
      className={className}
      center={[-18.91368, 47.53613]}
      zoom={13}
      style={{
        width,
        height,
      }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default MapContainerForm;
