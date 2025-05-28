export const useListAction = (items) => {
    const addItem = (item) => items.value.push(item)
    
    const removeItem = (slug) => {
        const index = items.value.findIndex(item => item.slug === slug)

        index >= 0 && items.value.splice(index, 1)
    }

    return { addItem, removeItem }
}