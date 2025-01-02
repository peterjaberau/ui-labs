export default {
  'button': {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "ButtonProps",
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "className": {
        "type": "string"
      },
      "style": {
        "type": "object"
      },
      "href": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "size": {
        "type": "string",
        "enum": ["xs", "sm", "md", "lg"]
      },
      "type": {
        "type": "string",
        "enum": ["button", "reset", "submit"]
      },
      "level": {
        "type": "string"
      },
      "tooltip": {
        "type": ["string", "object"]
      },
      "tooltipPlacement": {
        "type": "string",
        "enum": ["top", "right", "bottom", "left"]
      },
      "tooltipContainer": {
        "type": "object"
      },
      "tooltipTrigger": {
        "type": ["string", "array"]
      },
      "tooltipRootClose": {
        "type": "boolean"
      },
      "disabled": {
        "type": "boolean"
      },
      "active": {
        "type": "boolean"
      },
      "block": {
        "type": "boolean"
      },
      "iconOnly": {
        "type": "boolean"
      },
      "disabledTip": {
        "type": ["string", "object"]
      },
      "classPrefix": {
        "type": "string"
      },
      "classnames": {
        "type": "object"
      },
      "componentClass": {
        "type": "string"
      },
      "overrideClassName": {
        "type": "boolean"
      },
      "loading": {
        "type": "boolean"
      },
      "loadingClassName": {
        "type": "string"
      },
      "testIdBuilder": {
        "type": "object"
      }
    },
    "required": ["type", "level", "tooltipPlacement", "tooltipTrigger", "tooltipRootClose", "classPrefix", "classnames", "componentClass"]
  }
}
