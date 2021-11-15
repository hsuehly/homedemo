import type { FC, CSSProperties } from "react";
import "./index.less";
import { Collapse } from "antd";
interface PeopleListProps {
  style?: CSSProperties;
}
export const PeopleList: FC<PeopleListProps> = ({ style }) => {
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={callback}
      expandIconPosition={"right"}
      style={style}
    >
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
