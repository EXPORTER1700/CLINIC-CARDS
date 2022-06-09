export const makeRequestParams = (param: string, values: string[]) => {
    return "?" + values.map(item => `${param}=${item}&`).join('')
}