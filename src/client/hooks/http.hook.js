import { useState, useCallback } from 'react'

export const useHTTP = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)

        try {
            const res = await fetch(url, { method, body, headers })
            console.log(res)
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message)
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return { error, loading, request, clearError }
}