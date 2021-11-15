import "./index.less";
import { VideoTrack } from "../../components/VideoTrack";
import { PeopleList } from "../../components/PeopleList";
export const DoctorReplay = () => {
  return (
    <div className="doctor">
      <div className="aside"> </div>
      <div className="main">
        <div>
          <div>我是这个直播的标题哈我是这个直播的标题哈有多长显示多长</div>
          <div className="content">
            {/* <div>sdsad</div> */}
            <div>
              <video
                src="http://1500007853.vod2.myqcloud.com/438557c7vodtranscq1500007853/f78e3b1e387702291257567954/v.f100030.mp4"
                style={{ width: 520, height: 405 }}
                controls
              ></video>
              <VideoTrack />
            </div>
            <div style={{ minWidth: 300, width: 350 }}>
              <PeopleList />
            </div>
          </div>
        </div>
      </div>
      <div className="aside"></div>
    </div>
  );
};
