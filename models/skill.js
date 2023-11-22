const skills = [
    {id: 11, skill: 'HTML', level: 7},
    {id: 12, skill: 'CSS', level: 7},
    {id: 13, skill: 'JavaScript', level: 7},
    {id: 14, skill: 'Node.js', level: 2},
    {id: 15, skill: 'Express.js', level: 2},
    {id: 16, skill: 'MongoDB', level: 0},
    {id: 17, skill: 'React', level: 0},
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}