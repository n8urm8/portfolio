import { useEffect, useState, useCallback } from 'react'

export const useSearchParams = () => {
  const [searchParams, setSearchParamsState] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search)
  )

  const setSearchParams = useCallback(
    (params: Record<string, string> | URLSearchParams) => {
      const newParams =
        params instanceof URLSearchParams ? params : new URLSearchParams(params)
      const newUrl = `${window.location.pathname}?${newParams.toString()}`
      window.history.pushState({}, '', newUrl)
      setSearchParamsState(new URLSearchParams(newParams))
    },
    []
  )

  const getSearchParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key)
    },
    [searchParams]
  )

  // Listen for popstate events (back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      setSearchParamsState(new URLSearchParams(window.location.search))
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return { searchParams, setSearchParams, getSearchParam }
}
