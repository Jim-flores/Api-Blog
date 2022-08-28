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
        id: uuid.v4(), //obligatorio y único
        first_name: data.first_name, //obligatorio
        last_name: data.last_name, //obligatorio
        email: data.email, //obligatorio y único
        password: hashPassword(data.password), //obligatorio
        phone: data.phone ? data.phone : '', //unico
        birthday_date: '', //obligatorio
        rol: 'normal', //obligatorio y por defecto "normal"
        profile_image: data.profile_image ? DataTransfer.profile_image: '',
        country: '', //obligatorio
        is_active: true, //obligatorio y por defecto 
        trueverified: false//obligatorio y por defecto false
    }
    console.log(newUser)
}

createUser({password: 'root'})