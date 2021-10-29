let items = [
    {
        name: 'first', amount: 1
    },
    {
        name: 'second', amount: 2
    },
    {
        name: 'third', amount: 3
    }
]

const new_name = undefined

items.map(item => {
    if (item.name === 'first') {
        item.name = new_name || item.name
        return item
    }
})
console.log(items)

