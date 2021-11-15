import {
  CaretRightOutlined,
  SoundOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import { Slider } from "antd";
import { ReactNode } from "react";
import "./index.less";

export const VideoTrack = () => {
  const formatter = (value: number | undefined): ReactNode => {
    return `${value}%`;
  };
  return (
    <div className="VideoTrack">
      <span>
        <CaretRightOutlined
          style={{
            color: "#fff",
            fontSize: 20,
            marginLeft: 15,
            marginRight: 10,
            paddingTop: 6,
          }}
        />
      </span>
      <span style={{ width: 508 }}>
        <Slider tipFormatter={formatter} />
      </span>
      <span>
        <SoundOutlined
          style={{
            color: "#fff",
            fontSize: 20,
            paddingTop: 6,
            marginLeft: 15,
            marginRight: 10,
          }}
        />
      </span>
      <span style={{ width: 80 }}>
        <Slider tipFormatter={formatter} />
      </span>
      <span>
        <ArrowsAltOutlined
          style={{
            color: "#fff",
            fontSize: 20,
            paddingTop: 6,
            marginLeft: 15,
            marginRight: 10,
          }}
        />
      </span>
    </div>
  );
};
