const uuid = require('uuid')

const { comparePassword, hashPassword } = require('../utils/crypt')

const userDB = []

const getAllUsers = () => {
    return userDB
    //? select * form users;
}

const getUserById = (id) => {
    const data = userDB.filter(item => item.id === id)
    return data[0]
    //? select * form users where id = ${id};
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: '',
        last_name: '',
        email: '',
        password: hashPassword(),
        phone: '',
        birthday_date: '',
        age: '',
        rol: '',
        profile_image: '',
        active: true,
        verified: false
    }
    console.log(newUser)
}
createUser()