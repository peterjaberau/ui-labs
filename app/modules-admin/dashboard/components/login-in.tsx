import { SmileOutlined } from "@ant-design/icons";

import { Descriptions } from "antd";
import { FormatTime } from "~/components/common";

export function LoginIn({ data, userInfo }: any) {
  const latestLoginLog = data?.latestLoginLog ?? {};
  return (
    <div>
      <div className="flex items-center text-[20px] pb-[10px]">
        <SmileOutlined className="mr-[10px]" />
        Welcome，<span className="text-lime-500">{userInfo?.name}</span>
      </div>
      <Descriptions column={3} size="small">
        <Descriptions.Item label="Department">
          {userInfo?.department?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Last login time">
          <FormatTime timeStr={latestLoginLog?.loginAt} />
        </Descriptions.Item>
        <Descriptions.Item label="Last login ip">
          {latestLoginLog.ip}
        </Descriptions.Item>
        <Descriptions.Item label="Recently logged into the system">
          {latestLoginLog.system}
        </Descriptions.Item>
        <Descriptions.Item label="Recently logged in devices">
          {latestLoginLog.browser}
        </Descriptions.Item>
        <Descriptions.Item label="Last login address">
          {latestLoginLog.address}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
