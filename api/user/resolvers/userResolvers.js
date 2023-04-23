const arrayUsers = [
    {
        nome: "Ana",
        ativo: true,
        email: "ana@gmail.com"
    },
    {
        nome: "Marcia",
        ativo: false,
        email: "marcia@gmail.com"
    },
    {
        nome: "Gabriel",
        ativo: true,
        email: "gabriel@gmail.com"
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0],
        ultimoUser: () => arrayUsers[arrayUsers.length - 1]
    }
}

module.exports = userResolvers;