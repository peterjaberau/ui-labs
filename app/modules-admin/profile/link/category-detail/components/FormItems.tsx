import { ProFormText, ProFormTextArea } from "@ant-design/pro-components";

export function FormItems() {
  return (
    <>
      <ProFormText
        name="name"
        label="link name"
        placeholder="Please enter"
        rules={[
          {
            required: true,
            message: "Please enter",
          },
        ]}
      />
      <ProFormText
        name="url"
        label="Link address"
        placeholder="Please enter"
        rules={[
          {
            required: true,
            message: "Please enter",
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
            message: "Please enter",
          },
        ]}
      />
    </>
  );
}
