import React from 'react'
import NET from "../../network";
import ContextData from "./ContextData";

const UploadData = ()=>{
    const {stateData, dispatchData} = React.useContext(ContextData)

    React.useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/genre`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_GENRE",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchGenre()
    }, [])

    React.useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/publishers`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_PUBLISHER",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchGenre()
    }, [])

    React.useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/developers`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_DEVELOPER",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchGenre()
    }, [])

    React.useEffect(() => {
        const fetchTovars = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/tovars`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_TOVARS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchTovars()
    }, [])

    React.useEffect(() => {
        const fetchTovars = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/activation`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_ACTIVATION",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchTovars()
    }, [])
    React.useEffect(() => {
        const fetchTovars = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/region`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_REGION",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchTovars()
    }, [])
    React.useEffect(() => {
        const fetchTovars = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/all/tovars`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_ALLTOVARINFO",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchTovars()
    }, [])
    React.useEffect(() => {
        const fetchTovars = async () => {
            try {
                const response = await fetch(`${NET.APP_URL}/cupons`)

                if (response.status === 200) {
                    const result = await response.json()
                    dispatchData({
                        type: "FETCH_CUPONS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchTovars()
    }, [])


}



export default UploadData