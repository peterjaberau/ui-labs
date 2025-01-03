import { ProFormText, ProFormTextArea } from "@ant-design/pro-components";

export function FormItems() {
  return (
    <>
      <ProFormText
       name="name"
        label="label name"
        placeholder="Please enter"
        rules={[
          {
            required: true,
            message: "Please enter username",
          },
        ]}
      />
      <ProFormTextArea
        name="description"
        label="description"
        placeholder="Please enter"
        rules={[
          {
            required: false,
            message: "Please enter username",
          },
        ]}
      />
    </>
  );
}
