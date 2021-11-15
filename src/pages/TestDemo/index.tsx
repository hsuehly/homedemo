import { VideoTrack } from "../../components/VideoTrack";
import { PeopleList } from "../../components/PeopleList";
import "./index.less";
export const TestDemo = () => {
  return (
    <div className="testdemo">
      <div className="aside"></div>
      <div className="main">
        <div>我是这个直播的标题哈我是这个直播的标题哈有多长显示多长</div>
        <div className="box">
          <div>
            <video
              src="http://1500007853.vod2.myqcloud.com/438557c7vodtranscq1500007853/f78e3b1e387702291257567954/v.f100030.mp4"
              style={{ width: 720, height: 405 }}
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="aside"></div>
    </div>
  );
};
