import { memo } from "react";
import type { FC } from "react";
import useCountDown from "./indexs";
interface TimeAreaProps {
  /** 当前时间 */
  currentTime?: number;
  /** 结束时间 */
  endTime?: number;
  /** 另一种方式，不传当前时间和结束时间，直接传时间差 */
  differTime?: number;
  cb?: (res: boolean) => void;
}
export const TimeArea: FC<TimeAreaProps> = ({
  currentTime,
  endTime,
  differTime,
  cb,
}) => {
  const { d, h, m, s } = useCountDown(
    {
      currentTime,
      endTime,
      differTime,
    },
    () => {
      //   alert("倒计时结束");
      //   console.log("倒计时结束");
      if (cb) {
        cb(true);
      }
    }
  );
  return (
    <div style={{ width: "200px", height: "200px" }}>
      {console.log("组件渲染")}
      距离任务结束 {d}天<i>{h < 10 ? "0" + h : h}</i>:
      <i>{m < 10 ? "0" + m : m}</i>:<i>{s < 10 ? "0" + s : s}</i>
    </div>
  );
};
export default memo(TimeArea);
