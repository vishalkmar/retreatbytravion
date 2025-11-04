declare module "react-water-wave" {
  import * as React from "react";

  interface WaterWaveProps {
    imageUrl?: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    style?: React.CSSProperties;
    children?: (props: unknown) => React.ReactNode;
  }

  export default class WaterWave extends React.Component<WaterWaveProps> {}
}
