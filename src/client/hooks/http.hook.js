import { useState, useCallback } from 'react'

export const useHTTP = () => {
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)

        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const res = await fetch(url, { method, body, headers })
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message)
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            throw e
        }
    }, [])

    return { loading, request }
}