import BaseAPIConfig from '@/api/base/BaseAPIConfig.js';

export default class BaseAPI {

    constructor() {
        this.controler = null;
    }
    /**
     * Phương thức lấy tất cả dữ liệu
     */
    getAll() {
        return BaseAPIConfig.get(`${this.controler}`);
    }
    /**
     * Hàm lấy dữ liệu phân trang
     * @param {*} payload 
     */
    paging(payload) {
        return BaseAPIConfig.post(`${this.controler}/paging`, payload);
    }
    /**
     * Hàm cập nhật dữ liệu
     * @param {*} id 
     * @param {*} body 
     */
    update(id, body) {
        return BaseAPIConfig.update(`${this.controler}/update/${id}`, body);
    }
    /**
     * Hàm xóa bản ghi
     * @param {*} id 
     */
    delete(id) {
        return BaseAPIConfig.delete(`${this.controler}/delete/${id}`);
    }
}