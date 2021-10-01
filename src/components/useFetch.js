import { useState, useEffect, useCallback } from "react"



export const useFetch = url => {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])
    const getFetch = useCallback(async e => {
        setLoading(true)
        let data = await fetch(url)
        let response = await data.json()
        setResult(response)
        setLoading(false)

    }, [url])


    useEffect(() => {
        console.log("userEffect")
        getFetch()

    }, [getFetch]);





    return { loading, result }
}