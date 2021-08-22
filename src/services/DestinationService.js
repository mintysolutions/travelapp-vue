export const getDestination = async (slug) => {
    const req = await fetch('https://travel-dummy-api.netlify.app/'+slug)
    return req.json()
}
