
const visibleStudies = ((studies, { text }) => {
    return studies.filter(study => {
        const nameMatch = study.name.includes(text)
        const serverMatch = study.server.includes(text)
        const protocolMatch = study.protocol.includes(text)

        return nameMatch || serverMatch || protocolMatch;
    })
})

export default visibleStudies