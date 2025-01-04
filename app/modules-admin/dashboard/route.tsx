import { LoginIn, SignIn } from "./components";
import { PageContainer, ProCard } from "@ant-design/pro-components";

import { useGetDashboardQuery } from "~/apis-client/admin/dashboard";
import { useSelectUserInfo } from "@/apis-client/common/user-info";

export function Route() {
  const userInfo = useSelectUserInfo();
  const _data: any = useGetDashboardQuery("");
  const { data, isLoading }: any = _data || {};

  return (
    <PageContainer loading={isLoading}>
      <ProCard>
        <ProCard>
          <div className="flex justify-between">
            <LoginIn data={data} userInfo={userInfo} />
            <SignIn data={data} />
          </div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
}
