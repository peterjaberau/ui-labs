import type React from 'react'
import { useEffect } from 'react'

import { useTemporarySetting } from '~/internals/development/sg/shared/settings/temporary/useTemporarySetting.ts'

export const UserSessionStores: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => {
    const today = new Date().toDateString()
    const [daysActiveCount, setDaysActiveCount] = useTemporarySetting('user.daysActiveCount', 0)
    const [lastDayActive, setLastDayActive] = useTemporarySetting('user.lastDayActive', null)

    const loading = daysActiveCount === undefined || lastDayActive === undefined

    useEffect(() => {
        if (!loading && lastDayActive !== today) {
            setLastDayActive(today)
            setDaysActiveCount(daysActiveCount + 1)
        }
    }, [daysActiveCount, lastDayActive, loading, setDaysActiveCount, setLastDayActive, today])

    return null
}
