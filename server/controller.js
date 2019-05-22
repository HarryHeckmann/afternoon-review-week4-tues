let tacos = [
    {
        name: 'Brisket Taco',
        id: 1
    },
    {
        name: 'Fajita Chicken',
        id: 2
    }
]


module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const {name} = req.body
        const id = tacos.length+1
        const newTaco = {
            name: name,
            id: id
        }
        tacos.push(newTaco)
        res.status(200).send(tacos)
    },

    getTacos: (req, res) => {
        res.status(200).send(tacos)
    },

    update: (req, res) => {
        console.log(req.params)
        const {name} = req.body
        const id = req.params.id
        // console.log(id)
        let index = tacos.findIndex((taco) => {
            return taco.id == id
        })
        console.log(index)
        taco = tacos[index]
        tacos[index] = {
            name: name,
            id: taco.id
        }
        res.status(200).send(tacos)
    },

    delete: (req, res) => {
        const id = req.params.id
        let index = tacos.findIndex((taco) => {
            return taco.id == id
        })
        tacos.splice(index, 1)
        res.status(200).send(tacos)
    }

}