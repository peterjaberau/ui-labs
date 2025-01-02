export default {
  "error": [
  ],
  "flex": [
  ],
  "grid": [
  ],
  "container": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "collapse-group": [
    {
      "eventName": "change",
      "eventLabel": "Collapse State Change",
      "description": "Triggered when the collapse panel state changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "title": "Data",
              "type": "object",
              "properties": {
                "activeKeys": {
                  "type": "array",
                  "title": "Current Expanded Index List"
                },
                "collapseId": {
                  "type": "string",
                  "title": "Collapser Index"
                },
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapser State"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "panel": [
  ],
  "tabs": [
    {
      "eventName": "change",
      "eventLabel": "Tab Switch",
      "description": "Tab switch",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Tab Index"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "switch-container": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "crud": [
    {
      "eventName": "fetchInited",
      "eventLabel": "Data Fetch Initialized",
      "description": "Triggered when remote data fetch is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order Change",
      "description": "Manual row order change event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Visible Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row",
      "description": "Triggered on mouse enter row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row",
      "description": "Triggered on mouse leave row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "table2": [
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order Change",
      "description": "Manual row order change event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Visible Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Row double click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row",
      "description": "Triggered on mouse enter row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row",
      "description": "Triggered on mouse leave row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                }
              }
            }
          }
        }
      ]
    }
  ],


  "crud2": [
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]",
    "[Circular]"
  ],
  "form": [
    {
      "eventName": "inited",
      "eventLabel": "Initialization data interface request completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the form value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "formItemValidateSucc",
      "eventLabel": "Form item validation succeeded",
      "description": "Triggered after form item validation succeeds",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "formItemValidateError",
      "eventLabel": "Form item validation failed",
      "description": "Triggered after form item validation fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "validateSucc",
      "eventLabel": "Form validation succeeded",
      "description": "Triggered after form validation succeeds",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "validateError",
      "eventLabel": "Form validation failed",
      "description": "Triggered after form validation fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "submit",
      "eventLabel": "Form submission",
      "strongDesc": "After configuring this event, the default validation, submission to API or target, etc., will not be triggered during form submission. All actions need to be configured by yourself",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current form data, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "submitSucc",
      "eventLabel": "Submission succeeded",
      "description": "Triggered after form submission succeeds. If the event source is a button and the button type is 'submit', the submission success event will be triggered even if the current form is not configured with a 'save interface'",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "result": {
                  "type": "object",
                  "title": "Data returned after the save interface request succeeds"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "submitFail",
      "eventLabel": "Submission failed",
      "description": "Triggered after the form submission request fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after the save interface request fails"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "asyncApiFinished",
      "eventLabel": "Remote request polling ended",
      "description": "Triggered after asyncApi remote request polling ends",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, can be accessed using .fieldName"
            }
          }
        }
      ]
    }
  ],
  "service": [
    {
      "eventName": "init",
      "eventLabel": "Initialization",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, can be accessed using .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "fetchInited",
      "eventLabel": "Initialization data interface request completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fetchSchemaInited",
      "eventLabel": "Initialization Schema interface request completed",
      "description": "Triggered when the remote initialization Schema interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response message"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-text": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Input box content changed"
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Input box gained focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Input box lost focus"
    }
  ],
  "textarea": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the input box value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current text content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-number": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Value changed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Number box gained focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Number box lost focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current value"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "nested-select": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus"
    }
  ],
  "chained-select": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    }
  ],
  "dropdown-button": [
  ],
  "checkboxes": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "addConfirm",
      "eventLabel": "Confirm addition",
      "description": "Triggered when addition is submitted"
    },
    {
      "eventName": "editConfirm",
      "eventLabel": "Confirm edit",
      "description": "Triggered when edit is submitted"
    },
    {
      "eventName": "deleteConfirm",
      "eventLabel": "Confirm deletion",
      "description": "Triggered when deletion is submitted"
    }
  ],
  "radios": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected value changes"
    }
  ],
  "checkbox": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the selected state changes"
    }
  ],
  "input-date": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-date-range": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Gained focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Lost focus",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current time range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-file": [
    {
      "eventName": "change",
      "eventLabel": "Value changed",
      "description": "Triggered when the upload file value changes (also triggered on upload failure)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "file": {
                  "type": "object",
                  "title": "Uploaded file"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "remove",
      "eventLabel": "Remove file",
      "description": "Triggered when a file is removed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Removed file"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "success",
      "eventLabel": "Upload succeeded",
      "description": "Triggered when a file is uploaded successfully",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded file"
                },
                "result": {
                  "type": "object",
                  "title": "Response data returned after the remote upload request succeeds"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fail",
      "eventLabel": "Upload failed",
      "description": "Triggered when a file upload fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded file"
                },
                "error": {
                  "type": "object",
                  "title": "Error information returned after the remote upload request fails"
                }
              }
            }
          }
        }
      ]
    }
  ],




  "input-image": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the file value changes (also triggers on upload failure)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "file": {
                  "type": "object",
                  "title": "Uploaded File"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "remove",
      "eventLabel": "Remove File",
      "description": "Triggered when a file is removed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Removed File"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "success",
      "eventLabel": "Upload Success",
      "description": "Triggered when a file is successfully uploaded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded File"
                },
                "result": {
                  "type": "object",
                  "title": "Response Data from Successful Remote Upload"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "fail",
      "eventLabel": "Upload Failure",
      "description": "Triggered when a file upload fails",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Uploaded File"
                },
                "error": {
                  "type": "object",
                  "title": "Error Information from Failed Remote Upload"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-excel": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered after Excel upload and parsing is complete",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Parsed Excel Data"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-tag": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Blur"
    }
  ],
  "list-select": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    }
  ],
  "button-group-select": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    }
  ],
  "button-toolbar": [
  ],
  "picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected state changes"
    },
    {
      "eventName": "itemClick",
      "eventLabel": "Option Click",
      "description": "Triggered when an option is clicked"
    }
  ],
  "switch": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the switch value changes"
    }
  ],
  "input-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the slider value changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus if showInput is true"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus if showInput is true"
    }
  ],
  "input-rating": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the rating value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "number",
                  "title": "Current Score"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-city": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change"
    }
  ],
  "transfer": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box loses focus"
    },
    {
      "eventName": "selectAll",
      "eventLabel": "Select All",
      "description": "Select all options"
    }
  ],
  "transfer-picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box loses focus"
    },
    {
      "eventName": "selectAll",
      "eventLabel": "Select All",
      "description": "Select all options"
    }
  ],
  "tabs-transfer": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes"
    },
    {
      "eventName": "tab-change",
      "eventLabel": "Tab Switch",
      "description": "Triggered when the tab is switched",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "key": {
                  "type": "string",
                  "title": "Activated Index"
                }
              }
            }
          }
        }
      ]
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
      "eventName": "add",
      "eventLabel": "Add",
      "description": "Triggered when a combo item is added"
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete",
      "description": "Delete combo item"
    },
    {
      "eventName": "dragEnd",
      "eventLabel": "Drag End",
      "description": "Triggered when a combo item drag ends and the position changes"
    },
    {
      "eventName": "tabsChange",
      "eventLabel": "Switch Tab",
      "description": "Triggered when switching tabs if tabsMode is true"
    }
  ],
  "input-group": [
  ],
  "input-table": [
    {
      "eventName": "add",
      "eventLabel": "Add Row",
      "description": "Triggered when the add button at the bottom left or the add button in the right operation column of a row is clicked"
    },
    {
      "eventName": "addConfirm",
      "eventLabel": "Confirm Add",
      "description": "Triggered after clicking the add button, entering data, and clicking the save button in confirmation mode"
    },
    {
      "eventName": "addSuccess",
      "eventLabel": "Add Success",
      "description": "Triggered when successfully added after clicking save in confirmation mode and configuring the add interface"
    },
    {
      "eventName": "addFail",
      "eventLabel": "Add Failure",
      "description": "Triggered when the interface call fails after clicking save in confirmation mode and configuring the add interface"
    },
    {
      "eventName": "edit",
      "eventLabel": "Edit Row",
      "description": "Triggered when the edit button in the right operation column of a row is clicked"
    },
    {
      "eventName": "editConfirm",
      "eventLabel": "Confirm Edit",
      "description": "Triggered after clicking the edit button, entering data, and clicking the save button in confirmation mode"
    },
    {
      "eventName": "editSuccess",
      "eventLabel": "Edit Success",
      "description": "Triggered when successfully edited after clicking save in confirmation mode and configuring the edit interface"
    },
    {
      "eventName": "editFail",
      "eventLabel": "Edit Failure",
      "description": "Triggered when the interface call fails after clicking save in confirmation mode and configuring the edit interface"
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete Row",
      "description": "Triggered when the delete button in the right operation column of a row is clicked"
    },
    {
      "eventName": "deleteSuccess",
      "eventLabel": "Delete Success",
      "description": "Triggered when the delete interface is configured and the interface call is successful"
    },
    {
      "eventName": "deleteFail",
      "eventLabel": "Delete Failure",
      "description": "Triggered when the delete interface is configured and the interface call fails"
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the table data changes"
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order",
      "description": "Manual row order drag event"
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Row click event"
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Row double click event"
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row Event",
      "description": "Triggered when the mouse enters the entire row"
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row Event",
      "description": "Triggered when the mouse leaves the entire row"
    }
  ],
  "matrix-checkboxes": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Selected value change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "array",
                  "title": "Selected Values"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-rich-text": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input content change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Rich Text Value"
                }
              },
              "description": "Current data field, can read the corresponding value through .fieldName"
            }
          }
        }
      ]
    }
  ],
  "diff-editor": [
    {
      "eventName": "change",
      "eventLabel": "Code Change",
      "description": "Triggered when the code changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the right input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the right input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "editor": [
    {
      "eventName": "change",
      "eventLabel": "Code Change",
      "description": "Triggered when the code changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Code Content"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "search-box": [
    {
      "eventName": "search",
      "eventLabel": "Click Search",
      "description": "Triggered when the search icon is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the input box value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-kv": [
    {
      "eventName": "add",
      "eventLabel": "Add",
      "description": "Triggered when a combo item is added",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Combo Item Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "delete",
      "eventLabel": "Delete",
      "description": "Delete combo item",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "key": {
                  "type": "string",
                  "title": "Deleted Index"
                },
                "value": {
                  "type": "string",
                  "title": "Combo Item Value"
                },
                "item": {
                  "type": "object",
                  "title": "Deleted Item"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-repeat": [
  ],
  "uuid": [
  ],
  "location-picker": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the selected value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "object",
                  "title": "Selected Value",
                  "properties": {
                    "address": {
                      "type": "string",
                      "title": "Address"
                    },
                    "lng": {
                      "type": "number",
                      "title": "Longitude"
                    },
                    "lat": {
                      "type": "number",
                      "title": "Latitude"
                    },
                    "vendor": {
                      "type": "string",
                      "title": "Vendor"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-sub-form": [
  ],



  "hidden": [
  ],
  "input-signature": [
  ],
  "static": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "button": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "defaultShow": true,
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "button-group": [
  ],
  "nav": [
    {
      "eventName": "click",
      "eventLabel": "Menu Click",
      "description": "Triggered on menu click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via field names"
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Menu Select",
      "description": "Triggered on menu select",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "toggled",
      "eventLabel": "Menu Expand",
      "description": "Triggered on menu expand",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "collapsed",
      "eventLabel": "Menu Collapse",
      "description": "Triggered on menu collapse",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "loaded",
      "eventLabel": "Data Loaded",
      "description": "Triggered after data is loaded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
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
      "eventName": "inited",
      "eventLabel": "Initialization Complete",
      "description": "Triggered when remote initialization data request is complete",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "finished",
      "eventLabel": "Click Complete",
      "description": "Triggered on final submission",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via field names"
            }
          }
        }
      ]
    },
    {
      "eventName": "stepChange",
      "eventLabel": "Step Change",
      "description": "Triggered on step change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "step": {
                  "type": "string",
                  "title": "Step Index"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered on form value change",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data"
            }
          }
        }
      ]
    },
    {
      "eventName": "submitSucc",
      "eventLabel": "Submit Success",
      "description": "Triggered on final submission success",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "result": {
                  "type": "object",
                  "title": "Data returned after successful submission"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "submitFail",
      "eventLabel": "Submit Failure",
      "description": "Triggered on final submission failure",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after submission failure"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "stepSubmitSucc",
      "eventLabel": "Step Submit Success",
      "description": "Single step submission success"
    },
    {
      "eventName": "stepSubmitFail",
      "eventLabel": "Step Submit Failure",
      "description": "Single step submission failure",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "error": {
                  "type": "object",
                  "title": "Error information returned after single step submission failure"
                }
              }
            }
          }
        }
      ]
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
  ],
  "tpl": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "icon": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
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
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered on click",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered on mouse enter",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered on mouse leave",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "card": [
  ],
  "card2": [
  ],
  "table": [
    {
      "eventName": "selectedChange",
      "eventLabel": "Table Item Selection",
      "description": "Manual table item selection event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "selectedItems": {
                  "type": "array",
                  "title": "Selected Row Records"
                },
                "unSelectedItems": {
                  "type": "array",
                  "title": "Unselected Row Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSort",
      "eventLabel": "Column Sort",
      "description": "Column sort click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "orderBy": {
                  "type": "string",
                  "title": "Column Name"
                },
                "orderDir": {
                  "type": "string",
                  "title": "Sort Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnFilter",
      "eventLabel": "Column Filter",
      "description": "Column filter click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "filterName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "filterValue": {
                  "type": "string",
                  "title": "Filter Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnSearch",
      "eventLabel": "Column Search",
      "description": "Column search click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "searchName": {
                  "type": "string",
                  "title": "Column Name"
                },
                "searchValue": {
                  "type": "object",
                  "title": "Search Value"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "orderChange",
      "eventLabel": "Row Order",
      "description": "Manual row drag order event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "movedItems": {
                  "type": "array",
                  "title": "Sorted Records"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "columnToggled",
      "eventLabel": "Column Visibility Change",
      "description": "Custom column click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "columns": {
                  "type": "array",
                  "title": "Current Displayed Column Configuration"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowClick",
      "eventLabel": "Row Click",
      "description": "Whole row click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowDbClick",
      "eventLabel": "Row Double Click",
      "description": "Whole row double click event",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseEnter",
      "eventLabel": "Mouse Enter Row Event",
      "description": "Triggered on mouse enter whole row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "rowMouseLeave",
      "eventLabel": "Mouse Leave Row Event",
      "description": "Triggered on mouse leave whole row",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "item": {
                  "type": "object",
                  "title": "Current Row Record"
                },
                "index": {
                  "type": "number",
                  "title": "Current Row Index"
                },
                "indexPath": {
                  "type": "number",
                  "title": "Row Index Path"
                }
              }
            }
          }
        }
      ]
    }
  ],



  "cell-field": [
  ],
  "chart": [
    {
      "eventName": "init",
      "eventLabel": "Initialization",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data field, can read the corresponding value through .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "click",
      "eventLabel": "Mouse Click",
      "description": "Triggered when the mouse is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "componentType": {
                  "type": "string",
                  "title": "Component Type"
                },
                "seriesType": {
                  "type": "string",
                  "title": "Series Type"
                },
                "seriesIndex": {
                  "type": "number",
                  "title": "Series Index"
                },
                "seriesName": {
                  "type": "string",
                  "title": "Series Name"
                },
                "name": {
                  "type": "string",
                  "title": "Name"
                },
                "dataIndex": {
                  "type": "number",
                  "title": "Data Index"
                },
                "data": {
                  "type": "object",
                  "title": "Data"
                },
                "dataType": {
                  "type": "string",
                  "title": "Data Type"
                },
                "value": {
                  "type": "number",
                  "title": "Value"
                },
                "color": {
                  "type": "string",
                  "title": "Color"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseover",
      "eventLabel": "Mouse Hover",
      "description": "Triggered when the mouse hovers",
      "dataSchema": "[Circular]"
    },
    {
      "eventName": "legendselectchanged",
      "eventLabel": "Toggle Legend Selection State",
      "description": "Triggered when toggling the legend selection state",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "name": {
                  "type": "string",
                  "title": "Name"
                },
                "selected": {
                  "type": "object",
                  "title": "Selected"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "sparkline": [
  ],
  "carousel": [
  ],
  "image": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "defaultShow": true,
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
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
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "tag": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "close",
      "eventLabel": "Click to Close",
      "description": "Triggered when clicked to close",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            },
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "label": {
                  "type": "object",
                  "title": "Label Name"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "json": [
  ],
  "progress": [
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
      "eventName": "change",
      "eventLabel": "Collapse State Change",
      "description": "Triggered when the collapse state changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "expand",
      "eventLabel": "Collapse Expanded",
      "description": "Triggered when the collapse state changes to expanded",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "collapse",
      "eventLabel": "Collapse Collapsed",
      "description": "Triggered when the collapse state changes to collapsed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "collapsed": {
                  "type": "boolean",
                  "title": "Collapse State"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "office-viewer": [
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
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-datetime-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-email": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "formula": [
  ],
  "group": [
  ],
  "input-month": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],








  "input-month-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-password": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "input-quarter": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-quarter-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-time": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-time-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-url": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Input box content changes"
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Input box gains focus"
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Input box loses focus"
    }
  ],
  "input-year": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Date"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "input-year-range": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when the time value changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "focus",
      "eventLabel": "Focus",
      "description": "Triggered when the input box gains focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "blur",
      "eventLabel": "Blur",
      "description": "Triggered when the input box loses focus (non-embedded mode)",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "value": {
                  "type": "string",
                  "title": "Current Time Range"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "breadcrumb": [
  ],




  "dialog": [
    {
      "eventName": "confirm",
      "eventLabel": "Confirm",
      "description": "Triggered when the dialog confirm button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "cancel",
      "eventLabel": "Cancel",
      "description": "Triggered when the dialog cancel button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    }
  ],
  "drawer": [
    {
      "eventName": "confirm",
      "eventLabel": "Confirm",
      "description": "Triggered when the drawer confirm button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "cancel",
      "eventLabel": "Cancel",
      "description": "Triggered when the drawer cancel button is clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
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
      "eventName": "init",
      "eventLabel": "Initialize",
      "description": "Triggered when the component instance is created and inserted into the DOM",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    },
    {
      "eventName": "inited",
      "eventLabel": "Initialization Data Interface Request Completed",
      "description": "Triggered when the remote initialization data interface request is completed",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "responseData": {
                  "type": "object",
                  "title": "Response Data"
                },
                "responseStatus": {
                  "type": "number",
                  "title": "Response Status (0 indicates success)"
                },
                "responseMsg": {
                  "type": "string",
                  "title": "Response Message"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "pullRefresh",
      "eventLabel": "Pull Refresh",
      "description": "Triggered after pulling down and releasing when pull-to-refresh is enabled (only for mobile)"
    }
  ],
  "pagination": [
    {
      "eventName": "change",
      "eventLabel": "Value Change",
      "description": "Triggered when input content changes",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "title": "Data",
              "properties": {
                "page": {
                  "type": "number",
                  "title": "Current Page Number"
                },
                "perPage": {
                  "type": "number",
                  "title": "Number of Records Displayed Per Page"
                }
              },
              "description": "Current data domain, values can be accessed via .fieldName"
            }
          }
        }
      ]
    }
  ],
  "plain": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "reset": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "defaultShow": true,
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "submit": [
    {
      "eventName": "click",
      "eventLabel": "Click",
      "description": "Triggered when clicked",
      "defaultShow": true,
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseenter",
      "eventLabel": "Mouse Enter",
      "description": "Triggered when the mouse enters",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    },
    {
      "eventName": "mouseleave",
      "eventLabel": "Mouse Leave",
      "description": "Triggered when the mouse leaves",
      "dataSchema": [
        {
          "type": "object",
          "properties": {
            "context": {
              "type": "object",
              "title": "Context",
              "properties": {
                "nativeEvent": {
                  "type": "object",
                  "title": "Mouse Event Object"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "wrapper": [
  ],
  "column-toggler": [
  ],
  "my-renderer": [
  ]
}
