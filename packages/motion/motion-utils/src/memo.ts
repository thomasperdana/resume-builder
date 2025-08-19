/*#__NO_SIDE_EFFECTS__*/
export function memo<T extends any>(callback: () => T) {
    let result: T | undefined

    return () => {
        if (result === undefined) result = callback()
        return result
    }
}
