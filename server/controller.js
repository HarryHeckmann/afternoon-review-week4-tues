let food = [
    {
        type: 'Tacos',
        id: 1,
        items: [
            {
                name: 'Brisket Taco',
                id: 1
            },
            {
                name: 'Fajita Chicken',
                id: 2
            }
        ]
    },
    {
        type: 'Burritos',
        id: 2,
        items: [
            {
                name: 'Spicy Pork',
                id: 1
            },
            {
                name: 'Bean and Cheese',
                id: 2
            }
        ]
    }
]


module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const {name, index} = req.body
        const id = food[index].items.length+1
        const newItem = {
            name: name,
            id: id
        }
        food[index].items.push(newItem)
        res.status(200).send(food)
    },

    getFood: (req, res) => {
        res.status(200).send(food)
    },

    update: (req, res) => {
        console.log(req.params)
        const {name} = req.body
        const id = req.params.id
        const index = req.query.index
        let itemIndex = food[index].items.findIndex((item) => {
            return item.id == id
        })
        item = food[index].items[itemIndex]
        food[index].items[itemIndex] = {
            name: name,
            id: item.id
        }
        res.status(200).send(food)
    },

    delete: (req, res) => {
        const id = req.params.id
        const index = req.query.index
        let itemIndex = food[index].items.findIndex((item) => {
            return item.id == id
        })
        food[index].items.splice(itemIndex, 1)
        res.status(200).send(food)
    }

}