import { apiKeyTest } from '@/connect/connect'

export function saveApiKeyInStorage(key) {
    localStorage.setItem('apiKey', key)
}

export function getApiKeyFromStorage() {
    const apiKey = localStorage.getItem('apiKey')
    return apiKey;
}

export function testApiStorage() {
    const apiKey = getApiKeyFromStorage()
    if (apiKey) {
        const test = apiKeyTest(apiKey)
        if (test != 'error') {
            return true
        }
    }
    return false
}