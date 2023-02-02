export const formatDate = fecha => {
    const newDate = new Date(fecha.split("T")[0].split("-"))
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('en-US', options)
}