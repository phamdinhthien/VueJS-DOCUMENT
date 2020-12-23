import BaseAPI from '@/api/base/BaseAPI.js';

class TodosAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "todos";
    }
}

export default new TodosAPI();