import { CheckCircleFilled } from "@ant-design/icons";

import { Button, message } from "antd";

import confetti from "canvas-confetti";
import { useSignInMutation } from "@/apis-client/common/signin";
import { useState } from "react";

export function SignIn({ data: _data }: any) {
  const [data, setData] = useState(_data);
  const [signIn, signInOther] = useSignInMutation();
  const signInHanlder = async () => {
    const result: any = await signIn({}).unwrap();
    if (result.code === 0) {
      setData({
        ...data,
        isLogin: true,
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      message.error(result.message);
    }
  };
  return (
    <div>
      {!data?.isLogin ? (
        <Button
          onClick={signInHanlder}
          htmlType="submit"
          disabled={data?.isLogin}
          loading={signInOther.isLoading}
        >
          signIn
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<CheckCircleFilled />}
          onClick={() => {
            message.success("🤖 Already signed in.");
          }}
        >
          Signed in
        </Button>
      )}
    </div>
  );
}
