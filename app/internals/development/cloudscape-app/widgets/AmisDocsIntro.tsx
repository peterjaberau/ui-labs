import * as React from "react"
import { render as renderAmis } from "amis"
import copy from 'copy-to-clipboard';
import {ToastComponent, AlertComponent, alert, confirm, toast} from 'amis-ui';
import axios from 'axios';
import { useLoaderData } from "@remix-run/react"

export async function clientLoader() {
  await new Promise((r) => setTimeout(r, 100))
  return { message: "This data came from the client loader" }
}


const AmisDocsIntro = () => {
  const data = useLoaderData<typeof clientLoader>()
  const [loading, setLoading] = React.useState(true)
  let theme = 'cxd';

  const uiPage = {
    type: "page",
    body: {
      type: "spinner",
      show: loading,
      overlay: true,
      body: {
        "type": "panel",
        "title": "Operational Strength",
        "body": [
          {
            "type": "table-view",
            "trs": [
              {
                "background": "#9ecfe2",
                "tds": [
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "rating factors",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "serial number",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Indicator name",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "weight",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Secondary indicator value",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Indicator score",
                    },
                  }
                ],
                "height": 44
              },
              {
                "tds": [
                  {
                    "rowspan": 4,
                    "body": {
                      "type": "tpl",
                      "tpl": "Business Indicators",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "1",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Product structure and competitiveness",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "40%",
                    },
                  },
                  {
                    "body": [
                      {
                        "value": "5",
                        "name": "radios",
                        "type": "radios",
                        "options": [
                          {
                            "label": "1",
                            "value": "1"
                          },
                          {
                            "label": "2",
                            "value": "2"
                          },
                          {
                            "label": "3",
                            "value": "3"
                          },
                          {
                            "label": "4",
                            "value": "4"
                          },
                          {
                            "label": "5",
                            "value": "5"
                          },
                          {
                            "label": "6",
                            "value": "6"
                          },
                          {
                            "label": "7",
                            "value": "7"
                          }
                        ]
                      },
                      {
                        "type": "textarea",
                        "minRows": 3,
                        "maxRows": 20,
                        "value": "test"
                      }
                    ],
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "wrapperComponent": "",
                      "tpl": "5.00",
                    },
                  }
                ],
                "height": 44
              },
              {
                "tds": [
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "2",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "wrapperComponent": "",
                      "tpl": "Technical level",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "wrapperComponent": "",
                      "tpl": "30%",
                    },
                  },
                  {
                    "body": [
                      {
                        "value": "5",
                        "name": "radios",
                        "type": "radios",
                        "options": [
                          {
                            "label": "1",
                            "value": "1"
                          },
                          {
                            "label": "2",
                            "value": "2"
                          },
                          {
                            "label": "3",
                            "value": "3"
                          },
                          {
                            "label": "4",
                            "value": "4"
                          },
                          {
                            "label": "5",
                            "value": "5"
                          },
                          {
                            "label": "6",
                            "value": "6"
                          },
                          {
                            "label": "7",
                            "value": "7"
                          }
                        ]
                      },
                      {
                        "type": "textarea",
                        "label": "",
                        "name": "textarea",
                        "minRows": 3,
                        "maxRows": 20,
                        "value": "test"
                      }
                    ],
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "5.00",
                    },
                  }
                ],
              },
              {
                "tds": [
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "3",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Fixed assets (100 million yuan) (two-year weighted)",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "15%",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "1375.04",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "7.00",
                    },
                  }
                ],
              },
              {
                "tds": [
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "4",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "Total operating income (100 million yuan) (three-year weighted)",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "15%",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "6949.30",
                    },
                  },
                  {
                    "body": {
                      "type": "tpl",
                      "tpl": "7.00",
                    },
                  }
                ],
              }
            ],
            "borderColor": "#080808",
            "themeCss": {
              "baseControlClassName": {
                "padding-and-margin:default": {}
              }
            }
          },
          {
            "type": "tpl",
            "tpl": "Operational strength score: 6(5.60)",
            "inline": false,
          },
          {
            "type": "tpl",
            "tpl": "Industry risk score: 3",
            "inline": false,
          },
          {
            "type": "tpl",
            "tpl": "Business risk score: 6",
            "inline": false,
          }
        ],
        "className": "Panel--default border-black",
        "bodyClassName": "text-sm p-4"
      },
    },
  }



  React.useEffect(() => {
    setLoading(false)

  }, [])

  return <div className="container mx-auto p-8">
    {
      renderAmis(
        uiPage,
        {
          locale: 'en-US',
          // scopeRef: (ref: any) => (amisScoped = ref)
        },
        {
          fetcher: ({
                      url, // 接口地址
                      method, // 请求方法 get、post、put、delete
                      data, // 请求数据
                      responseType,
                      config, // 其他配置
                      headers // 请求头
                    }: any) => {
            config = config || {};
            config.withCredentials = true;
            responseType && (config.responseType = responseType);

            if (config.cancelExecutor) {
              config.cancelToken = new (axios as any).CancelToken(
                config.cancelExecutor
              );
            }

            config.headers = headers || {};

            if (method !== 'post' && method !== 'put' && method !== 'patch') {
              if (data) {
                config.params = data;
              }

              return (axios as any)[method](url, config);
            } else if (data && data instanceof FormData) {
              config.headers = config.headers || {};
              config.headers['Content-Type'] = 'multipart/form-data';
            } else if (
              data &&
              typeof data !== 'string' &&
              !(data instanceof Blob) &&
              !(data instanceof ArrayBuffer)
            ) {
              data = JSON.stringify(data);
              config.headers = config.headers || {};
              config.headers['Content-Type'] = 'application/json';
            }

            return (axios as any)[method](url, data, config);
          },
          isCancel: (value: any) => (axios as any).isCancel(value),
          copy: content => {
            copy(content);
            toast.success('内容已复制到粘贴板');
          },
          theme
        }
      )
    }
  </div>
}

export default AmisDocsIntro

