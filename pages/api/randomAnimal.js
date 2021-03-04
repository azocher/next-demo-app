export default function animalrand(req, res) {
    let animals = ["elephant", "rhino", "dog", "cat"]
    let randomAnimal = animals[3]

    res.status(200).json({"my_animal": randomAnimal})
}