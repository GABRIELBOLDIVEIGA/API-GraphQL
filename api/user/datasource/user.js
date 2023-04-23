import { RESTDataSource } from '@apollo/datasource-rest';

class UsersAPI extends RESTDataSource {
    constructor(){
        super()
        this.baseUrl = "http://localhost:3000"
    }

    async getUsers() {
       return this.get("/users")
    }
}

module.exports = UsersAPI;