import { Label, Tooltip } from '~/sg/wildcard'

import styles from './IndexJobLabel.module.scss'

interface IndexJobLabelProps {
    label: string
    tooltip: string
}

export const IndexJobLabel: React.FunctionComponent<React.PropsWithChildren<IndexJobLabelProps>> = ({
    label,
    tooltip,
    children,
}) => (
    <>
        <li className={styles.jobField}>
            <Label className={styles.jobLabel}>
                <Tooltip content={tooltip}>
                    <span>{label}:</span>
                </Tooltip>
            </Label>
            {children}
        </li>
    </>
)
