import {useMemo} from "react";

export const useSearch = <T>(array: T[], keys: Array<keyof T>, search: string) => {
    const searchArray = useMemo(() => {
        return array.filter((item: T) => {
            return keys.reduce((acc: number, key) => {
                const a = item[key]
                console.log(typeof a)
                return item[key] ? acc + 1 : acc
            }, 0)
        })
    }, [search])
}