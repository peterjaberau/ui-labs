export const data =  {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Api specification for Plugins",
  "type": "object",
  "properties": {
    "rendererName": {
      "type": "string"
    },
    "$schema": {
      "type": "string"
    },
    "disabledRendererPlugin": {
      "type": "boolean"
    },
    "name": {
      "type": "string"
    },
    "order": {
      "type": "number"
    },
    "isBaseComponent": {
      "type": "boolean"
    },
    "icon": {
      "type": "string"
    },
    "pluginIcon": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "docLink": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "scaffold": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "body": {
                "type": "array",
                "items": {}
              },
              "size": {
                "type": "string"
              },
              "style": {
                "type": "object",
                "properties": {
                  "position": {
                    "type": "string"
                  },
                  "display": {
                    "type": "string"
                  },
                  "flex": {
                    "type": "string"
                  },
                  "flexGrow": {
                    "type": "number"
                  },
                  "flexBasis": {
                    "type": "number"
                  }
                },
                "required": [
                  "position",
                  "display",
                  "flex",
                  "flexGrow",
                  "flexBasis"
                ]
              },
              "wrapperBody": {
                "type": "boolean"
              },
              "isFixedHeight": {
                "type": "boolean"
              },
              "isFixedWidth": {
                "type": "boolean"
              }
            },
            "required": [
              "type",
              "body",
              "size",
              "style",
              "wrapperBody",
              "isFixedHeight",
              "isFixedWidth"
            ]
          }
        },
        "style": {
          "type": "object",
          "properties": {
            "position": {
              "type": "string"
            },
            "rowGap": {
              "type": "string"
            },
            "columnGap": {
              "type": "string"
            }
          },
          "required": [
            "position",
            "rowGap",
            "columnGap"
          ]
        }
      },
      "required": [
        "type",
        "items",
        "style"
      ]
    },
    "previewSchema": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "tpl": {
                "type": "string"
              },
              "wrapperComponent": {
                "type": "string"
              },
              "className": {
                "type": "string"
              },
              "style": {
                "type": "object",
                "properties": {
                  "display": {
                    "type": "string"
                  },
                  "flex": {
                    "type": "string"
                  },
                  "flexBasis": {
                    "type": "number"
                  },
                  "textAlign": {
                    "type": "string"
                  },
                  "marginRight": {
                    "type": "number"
                  }
                },
                "required": [
                  "display",
                  "flex",
                  "flexBasis",
                  "textAlign",
                  "marginRight"
                ]
              },
              "inline": {
                "type": "boolean"
              }
            },
            "required": [
              "type",
              "tpl",
              "wrapperComponent",
              "className",
              "style",
              "inline"
            ]
          }
        },
        "style": {
          "type": "object",
          "properties": {
            "position": {
              "type": "string"
            },
            "rowGap": {
              "type": "string"
            },
            "columnGap": {
              "type": "string"
            }
          },
          "required": [
            "position",
            "rowGap",
            "columnGap"
          ]
        }
      },
      "required": [
        "type",
        "items",
        "style"
      ]
    },
    "panelTitle": {
      "type": "string"
    },
    "panelJustify": {
      "type": "boolean"
    },
    "regions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "label": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "label"
        ]
      }
    }
  },
  "required": [
    "rendererName",
    "$schema",
    "name",
  ]
}
