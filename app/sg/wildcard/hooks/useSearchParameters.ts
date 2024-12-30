import { useLocation } from '@remix-run/react'

/**
 * Return a new search parameters object based on the current URL.
 */
export const useSearchParameters = (): URLSearchParams => {
    const location = useLocation()
    return new URLSearchParams(location.search)
}
