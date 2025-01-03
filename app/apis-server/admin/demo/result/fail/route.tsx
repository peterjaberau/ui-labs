import { Button, Result, Typography } from "antd";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { CloseCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Paragraph, Text } = Typography;

export function Route() {
  const { t } = useTranslation();

  return (
    <Result
      status="error"
      title={t("submission-failed")}
      subTitle={t("check-modify-information-fail")}
      extra={[
        <Button type="primary" key="console">
          {t("go-console")}
        </Button>,
        <Button key="buy">{t("buy-again")}</Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            {t("content-submitted-following-error")}:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
          {t("account-frozen")} <a href="#">{t("thaw-immediately")} &gt;</a>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
          {t("account-not-yet-eligible")}{" "}
          <a href="#">{t("apply-unlock")} &gt;</a>
        </Paragraph>
      </div>
    </Result>
  );
}
