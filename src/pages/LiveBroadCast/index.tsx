import "./index.less";
import picend from "../../assets/pic_end.png";
import { Button } from "antd";
export const LiveBroadCast = () => {
  return (
    <div className="livend">
      <div className="aside"></div>
      <div className="main">
        <div>
          <img src={picend} alt="" />
          <div>直播已结束，回放暂未生成</div>
          <div style={{ marginTop: 50 }}>
            <Button type="primary" shape="round">
              返回
            </Button>
          </div>
        </div>
      </div>
      <div className="aside"></div>
    </div>
  );
};
