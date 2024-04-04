//hacer importacion del dao, manager o servicio que trae los metodos para la db.
//hacer importacion de bcrypt en donde sea que se guarde.

const register = async (req, res) => {
    const { name, email, password, age, phoneNumber } = req.body //Son los campos con los que Luis armo el schema, despues vemos si se lo pedimos al usuario aca o luego de registrarse.

    if (!name || !email || !password || !age || !phoneNumber) {
        return "Incomplete Values"
    }

    const newUser = { name, email, password, age, phoneNumber }

    const result = await userDao / userManager.createUser(newUser)//aca llamamos a la db ya sea a un servicio que llama a la db o al manager directo de la db.
    return result


}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return "Incomplete Values"
    }

    const user = await userDao / userManager.getUserBY({ email })

    if (!user) {
        return "User doesn't exist / Incorrect Credentials"
    }
    if ({ password } != user.password) {
        return "Incorrect Password / Incorrect Credentials"
    }
    return res.send({ status: "Success", message: 'Logged in' })
}