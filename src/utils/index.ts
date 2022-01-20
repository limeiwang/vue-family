export function localGet(key: string) {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(value || '')
    } catch (error) {
        return value
    }
}
