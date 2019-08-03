
const visibleStudies = ((studies, { text, sortBy }) => {
    return studies.filter(study => {
        text = text.toLowerCase()
        const nameMatch = study.name.toLowerCase().includes(text)
        const serverMatch = study.server.toLowerCase().includes(text)
        const protocolMatch = study.protocol.toLowerCase().includes(text)

        return nameMatch || serverMatch || protocolMatch;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name < b.name ? 1 : -1;
        } else if (sortBy === 'server') {
            return a.server < b.server ? 1 : -1;
        } else if (sortBy === 'protocol') {
            return a.protocol < b.protocol ? 1 : -1;
        } else return 1 
    })
})

export default visibleStudies