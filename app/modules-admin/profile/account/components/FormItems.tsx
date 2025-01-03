import { ProFormDigit, ProFormText } from "@ant-design/pro-components";

export function FormItems() {
  return (
    <>
      <ProFormText label="username" name="name" />
      <ProFormText label="nickname" name="nickname" />
      <ProFormText label="email" name="email" />
      <ProFormText label="Remarks" name="remark" />
      <ProFormText label="language" name="theme" />
      <ProFormText label="theme" name="lang" />
      <ProFormDigit label="Mobile phone number" name="phone" />
      <ProFormText label="Creation time" name="createdAt" />
      <ProFormText label="department" name="department" />
    </>
  );
}
