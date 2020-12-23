import BaseAPI from '@/api/base/BaseAPI.js';

class EmployeeAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "todos";
    }
}

export default new EmployeeAPI();