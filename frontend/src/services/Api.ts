const apiUrl = process.env.REACT_APP_API_SERVER_URL

export const createUserFeature = async (accessToken: string, body: any) => {
    const feature = await fetch(`${apiUrl}/api/feature`, {
        method: 'POST', headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body)
    })
    return feature
}