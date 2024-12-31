import { mdiRegex } from '@mdi/js'
import classNames from 'classnames'

import { SearchPatternType } from '~/internals/development/sg/shared/graphql-operations.ts'
import { Button, Icon, Tooltip } from '~/internals/development/sg/wildcard'

import {
    InsightQueryInput,
    type InsightQueryInputProps,
} from '../../../../../../components/form/query-input/InsightQueryInput.tsx'

import styles from './CaptureGroupQueryInput.module.scss'

interface CaptureGroupQueryInputProps extends Omit<InsightQueryInputProps, 'patternType'> {}

export const CaptureGroupQueryInput: React.FunctionComponent<CaptureGroupQueryInputProps> = props => (
    <InsightQueryInput
        {...props}
        patternType={SearchPatternType.regexp}
        className={classNames(props.className, styles.input)}
    >
        <Tooltip content="Regular expression is the only pattern type usable with capture groups and it’s enabled by default for this search input.">
            <Button variant="icon" className={styles.regexButton} disabled={true}>
                <Icon svgPath={mdiRegex} inline={false} height={21} width={21} aria-hidden={true} />
            </Button>
        </Tooltip>
    </InsightQueryInput>
)
