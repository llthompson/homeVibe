const apiUrl = process.env.REACT_APP_API_SERVER_URL

export const createUserFeature = async (accessToken: string, body: any) => {
    const response = await fetch(`${apiUrl}/api/feature`, {
        method: 'POST', headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body)
    })
    const feature = await response.json()

    return feature
}

export const rateFeatureByUser = async (accessToken: string, body: any) => {
    const response = await fetch(`${apiUrl}/api/feature`, {
        method: 'PUT', headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body)
    })
    const feature = await response.json()
    return feature
}

export const getUserFeatures = async (accessToken: string) => {
    const response = await fetch(`${apiUrl}/api/feature`, {
        method: 'GET', headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    })
    const features = await response.json()
    return features
}