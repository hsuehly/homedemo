import "./index.less";
import { Radio, Input, Button, Pagination, RadioChangeEvent } from "antd";
import { useState } from "react";
export const PlaybackList = () => {
  const [state, setstate] = useState(1);
  const handleChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setstate(e.target.value);
  };
  return (
    <div className="playbacklist">
      <div style={{ padding: "30px" }} className="checkelist">
        <div>请查看该场直播产生的所有回放，再判断是否</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <Radio.Group
            onChange={handleChange}
            value={state}
            style={{ height: 50 }}
          >
            <Radio value={1}>合格</Radio>
            <Radio value={2}>
              不合格
              {state === 2 ? (
                <Input style={{ width: 100, marginLeft: 10 }} />
              ) : null}
            </Radio>
          </Radio.Group>
          <Button type="primary" shape="round">
            确定
          </Button>
        </div>
      </div>
      <div className="listitem">
        <table cellPadding="10" cellSpacing="0">
          <tr>
            <th>ID</th>
            <th>开始时间</th>
            <th>时长</th>
            <th>视频大小</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>572840482083</td>
            <td>2021-09-01 12:00:00</td>
            <td>00:12:47</td>
            <td>375MB</td>
            <td>
              <span>查看</span>
              <span>上线</span>
              <span>下载</span>
            </td>
          </tr>
          <tr>
            <td>572840482083</td>
            <td>2021-09-01 12:00:00</td>
            <td>00:12:47</td>
            <td>375MB</td>
            <td>
              <span>查看</span>
              <span>上线</span>
              <span>下载</span>
            </td>
          </tr>
          <tr>
            <td>572840482083</td>
            <td>2021-09-01 12:00:00</td>
            <td>00:12:47</td>
            <td>375MB</td>
            <td>
              <span>查看</span>
              <span>上线</span>
              <span>下载</span>
            </td>
          </tr>
          <tr>
            <td>572840482083</td>
            <td>2021-09-01 12:00:00</td>
            <td>00:12:47</td>
            <td>375MB</td>
            <td>
              <span>查看</span>
              <span>上线</span>
              <span>下载</span>
            </td>
          </tr>
          <tr>
            <td>572840482083</td>
            <td>2021-09-01 12:00:00</td>
            <td>00:12:47</td>
            <td>375MB</td>
            <td>
              <span>查看</span>
              <span>上线</span>
              <span>下载</span>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
};
