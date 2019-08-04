
export default (items, { text, sortBy }) => {
    return items.filter(item => {
        let isMatch = false
        Object.keys(item).forEach ( key => {
            isMatch = key.toLowerCase().includes(text) ? true : isMatch 
        })
        return isMatch
    }).sort((a, b) => {
        Object.keys(items[0]).forEach(key => {
            if (sortBy === key.toString()) {
                return a.key < b.key ? 1 : -1;
            }
        })
    })
}
