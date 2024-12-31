import React, { useState } from "react"

import { mdiContentCopy } from "@mdi/js"
import classNames from "classnames"
import copy from "copy-to-clipboard"

import type { TelemetryV2Props } from "~/internals/development/sg/shared/telemetry"
import type { TelemetryProps } from "~/internals/development/sg/shared/telemetry/telemetryService.ts"
import { Button, Icon, screenReaderAnnounce, Tooltip } from "~/internals/development/sg/wildcard"

import styles from "./CopyPathAction.module.scss"

/**
 * A repository header action that copies the current page's repository or file path to the clipboard.
 */
export const CopyPathAction: React.FunctionComponent<
  {
    filePath: string
    className?: string
  } & TelemetryProps &
    TelemetryV2Props
> = ({ filePath, className, telemetryService, telemetryRecorder }) => {
  const [copied, setCopied] = useState(false)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    telemetryService.log("CopyFilePath")
    telemetryRecorder.recordEvent("search.header.filePath", "copy")
    copy(filePath)
    setCopied(true)
    screenReaderAnnounce("Path copied to clipboard")

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const label = copied ? "Copied!" : "Copy path to clipboard"

  return (
    <Tooltip content={label}>
      <Button aria-label="Copy path to clipboard" variant="icon" className={classNames(styles.button, className)} onClick={onClick} size="sm">
        <Icon className={styles.copyIcon} aria-hidden={true} svgPath={mdiContentCopy} />
      </Button>
    </Tooltip>
  )
}
