export const data =  {
  "error": [
  ],
  "flex": [
  ],
  "grid": [
  ],
  "container": [
  ],
  "collapse-group": [
  ],
  "panel": [
  ],
  "tabs": [
    {
      "actionType": "changeActiveKey",
      "actionLabel": "Activate Specified Tab",
      "description": "Modify the key of the currently active tab item",
      "config": [
        "activeKey"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "name": "activeKey",
            "label": "Active Item",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    }
  ],
  "switch-container": [
  ],
  "crud": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionLabel": "Assign Variable",
      "actionType": "setValue",
      "description": "Update list records"
    }
  ],
  "table2": [
    {
      "actionType": "select",
      "actionLabel": "Set Selected Item",
      "description": "Set the selected item of the table",
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "name": "selected",
            "label": "Selected Item",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all items in the table"
    },
    {
      "actionType": "clearAll",
      "actionLabel": "Clear All Selections",
      "description": "Clear all selected items in the table"
    }
  ],
  "crud2": [
    {
      "actionType": "search",
      "actionLabel": "Data Query",
      "description": "Complete list data query using specified conditions",
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "name": "query",
            "label": "Query Condition",
            "type": "ae-formulaControl",
            "variables": "${variables}",
            "size": "md",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "loadMore",
      "actionLabel": "Load More",
      "description": "Load more data into the list container"
    },
    {
      "actionType": "startAutoRefresh",
      "actionLabel": "Start Auto Refresh",
      "description": "Start auto refresh"
    },
    {
      "actionType": "stopAutoRefresh",
      "actionLabel": "Stop Auto Refresh",
      "description": "Stop auto refresh"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    "[Circular]",
    "[Circular]",
    "[Circular]"
  ],
  "form": [
    {
      "actionLabel": "Submit Form",
      "actionType": "submit",
      "description": "Trigger form submission"
    },
    {
      "actionLabel": "Reset Form",
      "actionType": "reset",
      "description": "Trigger form reset"
    },
    {
      "actionLabel": "Clear Form",
      "actionType": "clear",
      "description": "Trigger form clear"
    },
    {
      "actionLabel": "Validate Form",
      "actionType": "validate",
      "description": "Trigger form validation"
    },
    {
      "actionLabel": "Reload",
      "actionType": "reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionLabel": "Assign Variable",
      "actionType": "setValue",
      "description": "Trigger component data update"
    }
  ],
  "service": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "rebuild",
      "actionLabel": "Rebuild",
      "description": "Trigger schema API refresh and rebuild schema"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Update data domain data"
    }
  ],
  "input-text": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "textarea": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-number": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear number box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "nested-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "chained-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "dropdown-button": [
  ],
  "checkboxes": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "radios": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "checkbox": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-date": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-date-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-file": [
    {
      "actionType": "clear",
      "actionLabel": "Clear Data",
      "description": "Clear selected file"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-image": [
    {
      "actionType": "clear",
      "actionLabel": "Clear Data",
      "description": "Clear selected file"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-excel": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-tree": [
    {
      "actionType": "expand",
      "actionLabel": "Expand",
      "description": "Expand specified level",
      "innerArgs": [
        "openLevel"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "name": "openLevel",
            "label": "Expand Level",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "collapse",
      "actionLabel": "Collapse",
      "description": "Collapse tree nodes"
    },
    {
      "actionType": "add",
      "actionLabel": "Add",
      "description": "Add data item",
      "innerArgs": [
        "item",
        "parentValue"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "container",
            "body": [
              {
                "type": "input-kv",
                "label": "Data Item",
                "name": "item",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "required": true,
                "draggable": false,
                "valueType": "ae-formulaControl",
                "keyPlaceholder": "Key of the property in Option",
                "value": {
                  "label": "",
                  "value": ""
                }
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "label": "Value of Parent Data Item",
                "name": "parentValue",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "variables": "${variables}",
                "inputMode": "input-group",
                "placeholder": "Please enter the value of the parent data item valueField"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "edit",
      "actionLabel": "Edit",
      "description": "Edit data item",
      "innerArgs": [
        "item",
        "originValue"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "container",
            "body": [
              {
                "type": "input-kv",
                "label": "Data Item",
                "name": "item",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "size": "lg",
                "required": true,
                "draggable": false,
                "valueType": "ae-formulaControl",
                "keyPlaceholder": "Key of the property in Option",
                "value": {
                  "label": "",
                  "value": ""
                }
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "label": "Value of Data Item to Edit",
                "name": "originValue",
                "mode": "horizontal",
                "inputClassName": "ml-2",
                "required": true,
                "size": "lg",
                "variables": "${variables}",
                "inputMode": "input-group",
                "placeholder": "Please enter the valueField value of the data item before editing"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "delete",
      "actionLabel": "Delete",
      "description": "Delete data item",
      "innerArgs": [
        "value"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "label": "Value of Data Item to Delete",
            "name": "value",
            "mode": "horizontal",
            "inputClassName": "ml-2",
            "required": true,
            "size": "lg",
            "variables": "${variables}",
            "inputMode": "input-group",
            "placeholder": "Please enter the valueField value of the item to delete"
          }
        ]
      }
    },
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear data"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset data"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-tag": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "list-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "button-group-select": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "button-toolbar": [
  ],
  "picker": [
  ],
  "switch": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],
  "input-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset value to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign",
      "description": "Trigger component data update"
    }
  ],









  "input-rating": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear rating value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-city": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "transfer": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update, multiple values separated by ','"
    }
  ],
  "transfer-picker": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update, multiple values separated by ','"
    }
  ],
  "tabs-transfer": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset selected content"
    },
    {
      "actionType": "changeTabKey",
      "actionLabel": "Change Selected Tab",
      "description": "Change the currently selected tab to choose other options"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-color": [
  ],
  "condition-builder": [
  ],
  "fieldset": [
  ],
  "combo": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "addItem",
      "actionLabel": "Add Item",
      "description": "Add a new item",
      "innerArgs": [
        "item"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "combo",
            "label": "Add Item",
            "name": "item",
            "draggable": false,
            "multiple": true,
            "removable": true,
            "required": true,
            "addable": true,
            "strictMode": false,
            "canAccessSuperData": true,
            "mode": "horizontal",
            "items": [
              {
                "name": "key",
                "type": "input-text",
                "required": true,
                "placeholder": "Variable Name",
                "source": "${__setValueDs}"
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "val",
                "variables": "${variables}",
                "inputMode": "input-group"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-group": [
  ],
  "input-table": [
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    },
    {
      "actionType": "addItem",
      "actionLabel": "Add Row",
      "description": "Add row data",
      "innerArgs": [
        "item",
        "index"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "container",
            "body": [
              {
                "type": "input-number",
                "name": "index",
                "mode": "horizontal",
                "horizontal": {
                  "leftFixed": 4
                },
                "label": "Insert Position",
                "size": "lg",
                "placeholder": "Enter row number, leave empty to insert at the end"
              },
              {
                "type": "combo",
                "name": "value",
                "label": "Data Setting",
                "multiple": true,
                "removable": true,
                "required": true,
                "addable": true,
                "strictMode": false,
                "canAccessSuperData": true,
                "mode": "horizontal",
                "size": "lg",
                "addButtonText": "Add a Row",
                "items": [
                  {
                    "type": "combo",
                    "name": "item",
                    "label": false,
                    "renderLabel": false,
                    "multiple": true,
                    "removable": true,
                    "required": true,
                    "addable": true,
                    "strictMode": false,
                    "canAccessSuperData": true,
                    "className": "m-l",
                    "size": "lg",
                    "mode": "horizontal",
                    "addButtonText": "Add Field",
                    "items": [
                      {
                        "name": "key",
                        "type": "input-text",
                        "source": "${__setValueDs}",
                        "labelField": "label",
                        "valueField": "value",
                        "required": true
                      },
                      {
                        "type": "ae-formulaControl",
                        "variableMode": "tree",
                        "name": "val",
                        "variables": "${variables}"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "deleteItem",
      "actionLabel": "Delete Row",
      "description": "Delete a row of data",
      "innerArgs": [
        "condition",
        "index"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "container",
            "body": [
              {
                "type": "radios",
                "name": "__deleteType",
                "inputClassName": "event-action-radio",
                "mode": "horizontal",
                "label": "Delete Method",
                "horizontal": {
                  "leftFixed": 4
                },
                "options": [
                  {
                    "label": "Specify Row Number",
                    "value": "rowIndex"
                  },
                  {
                    "label": "Condition Expression",
                    "value": "conditionExpression"
                  }
                ]
              },
              {
                "type": "input-text",
                "name": "index",
                "mode": "horizontal",
                "horizontal": {
                  "leftFixed": 4
                },
                "required": true,
                "label": "Delete Range",
                "size": "lg",
                "placeholder": "Enter row number, separate multiple with commas",
                "hiddenOn": "this.__deleteType !== \"rowIndex\""
              },
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "condition",
                "variables": "${variables}",
                "label": "Delete Condition",
                "hiddenOn": "this.__deleteType !== \"conditionExpression\"",
                "mode": "horizontal",
                "required": true,
                "horizontal": {
                  "leftFixed": 4
                },
                "size": "lg"
              }
            ]
          }
        ]
      }
    },
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear component data"
    },
    {
      "actionType": "initDrag",
      "actionLabel": "Enable Sorting",
      "description": "Enable table drag sorting feature"
    },
    {
      "actionType": "cancelDrag",
      "actionLabel": "Cancel Sorting",
      "description": "Cancel table drag sorting feature"
    }
  ],
  "matrix-checkboxes": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-rich-text": [
  ],
  "diff-editor": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "focus",
      "actionLabel": "Focus",
      "description": "Focus on the right edit panel"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "editor": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "focus",
      "actionLabel": "Focus",
      "description": "Input box focus"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "search-box": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Update Data",
      "description": "Update data"
    }
  ],
  "input-kv": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-repeat": [
  ],
  "uuid": [
  ],
  "location-picker": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear selected value"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Value",
      "description": "Trigger component data update"
    }
  ],
  "input-sub-form": [
  ],
  "hidden": [
  ],
  "input-signature": [
  ],
  "static": [
  ],
  "button": [
  ],
  "button-group": [
  ],
  "nav": [
    {
      "actionType": "updateItems",
      "actionLabel": "Update Menu Items",
      "description": "Trigger component to update menu items"
    },
    {
      "actionType": "collapse",
      "actionLabel": "Menu Collapse",
      "description": "Trigger component collapse and expand"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    }
  ],
  "anchor-nav": [
  ],
  "tooltip-wrapper": [
  ],
  "alert": [
  ],
  "wizard": [
    {
      "actionType": "submit",
      "actionLabel": "Submit All",
      "description": "Submit all data"
    },
    {
      "actionType": "stepSubmit",
      "actionLabel": "Step Submit",
      "description": "Submit current step data"
    },
    {
      "actionType": "prev",
      "actionLabel": "Previous Step",
      "description": "Go to previous step"
    },
    {
      "actionType": "next",
      "actionLabel": "Next Step",
      "description": "Submit current step data"
    },
    {
      "actionType": "goto-step",
      "actionLabel": "Go to Step",
      "description": "Switch to specified step",
      "innerArgs": [
        "step"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "name": "step",
            "label": "Target Step",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal",
            "required": true
          }
        ]
      }
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Set Variable",
      "description": "Trigger component data update"
    }
  ],
  "table-view": [
  ],
  "web-component": [
  ],
  "audio": [
  ],
  "video": [
  ],
  "custom": [
  ],
  "tasks": [
  ],
  "each": [
  ],
  "property": [
  ],
  "iframe": [
  ],
  "qrcode": [
    {
      "actionType": "saveAs",
      "actionLabel": "Download",
      "description": "Trigger QR code download"
    }
  ],
  "tpl": [
  ],
  "icon": [
  ],
  "link": [
  ],
  "list": [
  ],
  "cards": [
  ],
  "mapping": [
  ],
  "avatar": [
  ],
  "card": [
  ],
  "card2": [
  ],









  "table": [
    {
      "actionType": "select",
      "actionLabel": "Set Selected Items",
      "description": "Set selected items in the table",
      "innerArgs": [
        "selected"
      ],
      "schema": {
        "type": "combo",
        "name": "args",
        "multiple": false,
        "strictMode": false,
        "items": [
          {
            "type": "ae-formulaControl",
            "variableMode": "tree",
            "name": "selected",
            "label": "选中项",
            "variables": "${variables}",
            "size": "lg",
            "mode": "horizontal"
          }
        ]
      }
    },
    {
      "actionType": "selectAll",
      "actionLabel": "Select All",
      "description": "Select all items in the table"
    },
    {
      "actionType": "clearAll",
      "actionLabel": "Clear Selected Items",
      "description": "Clear all selected items in the table"
    },
    {
      "actionType": "initDrag",
      "actionLabel": "Enable Sorting",
      "description": "Enable drag-and-drop sorting in the table"
    },
    {
      "actionType": "cancelDrag",
      "actionLabel": "Cancel Sorting",
      "description": "Cancel drag-and-drop sorting in the table"
    }
  ],
  "cell-field": [
  ],
  "chart": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "sparkline": [
  ],
  "carousel": [
  ],
  "image": [
    {
      "actionType": "preview",
      "actionLabel": "Preview",
      "description": "Preview image"
    },
    {
      "actionType": "zoom",
      "actionLabel": "Adjust Image Scale",
      "description": "Enlarge or reduce the image proportionally",
      "schema": {
        "type": "container",
        "body": [
          {
            "type": "combo",
            "name": "args",
            "multiple": false,
            "strictMode": false,
            "items": [
              {
                "type": "ae-formulaControl",
                "variableMode": "tree",
                "name": "scale",
                "mode": "horizontal",
                "variables": "${variables}",
                "horizontal": {
                  "leftFixed": 4
                },
                "label": {
                  "type": "tooltip-wrapper",
                  "tooltip": "定义每次放大或缩小图片的百分比大小，正值为放大，负值为缩小，默认50",
                  "tooltipTheme": "dark",
                  "placement": "top",
                  "tooltipStyle": {
                    "fontSize": "12px"
                  },
                  "className": "ae-formItemControl-label-tip",
                  "body": "调整比例"
                },
                "value": 50,
                "size": "lg"
              }
            ]
          }
        ]
      }
    }
  ],
  "images": [
  ],
  "date": [
  ],
  "time": [
  ],
  "datetime": [
  ],
  "calendar": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "tag": [
  ],
  "json": [
  ],
  "progress": [
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to default value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "status": [
  ],
  "steps": [
  ],
  "timeline": [
  ],
  "divider": [
  ],
  "code": [
  ],
  "markdown": [
  ],
  "collapse": [
    {
      "actionType": "expand",
      "actionLabel": "Expand Component",
      "description": "Change component collapse state to expanded"
    },
    {
      "actionLabel": "Collapse Component",
      "actionType": "collapse",
      "description": "Change component collapse state to collapsed"
    }
  ],
  "office-viewer": [
    {
      "actionType": "print",
      "actionLabel": "Print",
      "description": "Print document"
    },
    {
      "actionType": "saveAs",
      "actionLabel": "Download",
      "description": "Download document"
    }
  ],
  "pdf-viewer": [
  ],
  "log": [
  ],
  "action": [
  ],
  "input-array": [
  ],
  "control": [
  ],
  "input-datetime": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-datetime-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-email": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "formula": [
  ],
  "group": [
  ],
  "input-month": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-month-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-password": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-quarter": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-quarter-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-time": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-time-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "tree-select": [
    "[Circular]",
    "[Circular]",
    "[Circular]",
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear data"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset data"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    }
  ],
  "input-url": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-year": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "input-year-range": [
    {
      "actionType": "clear",
      "actionLabel": "Clear",
      "description": "Clear input box content"
    },
    {
      "actionType": "reset",
      "actionLabel": "Reset",
      "description": "Reset to initial value"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Value",
      "description": "Trigger component data update"
    }
  ],
  "breadcrumb": [
  ],
  "dialog": [
    {
      "actionType": "confirm",
      "actionLabel": "Confirm",
      "description": "Trigger dialog confirm operation"
    },
    {
      "actionType": "cancel",
      "actionLabel": "Cancel",
      "description": "Trigger dialog cancel operation"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "drawer": [
    {
      "actionType": "confirm",
      "actionLabel": "Confirm",
      "description": "Trigger drawer confirm operation"
    },
    {
      "actionType": "cancel",
      "actionLabel": "Cancel",
      "description": "Trigger drawer cancel operation"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "hbox": [
  ],
  "list-item": [
  ],
  "operation": [
  ],
  "page": [
    {
      "actionType": "reload",
      "actionLabel": "Reload",
      "description": "Trigger component data refresh and re-render"
    },
    {
      "actionType": "setValue",
      "actionLabel": "Assign Variable",
      "description": "Trigger component data update"
    }
  ],
  "pagination": [
  ],
  "plain": [
  ],
  "reset": [
  ],
  "submit": [
  ],
  "wrapper": [
  ],
  "column-toggler": [
  ],
  "my-renderer": [
  ]
}
