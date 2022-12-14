import * as http from "~/http/http"

const urlApi = "http://localhost:9999/course"

export const getAll = async (page) => {
    try{
        const res = await http.get(`${urlApi}?_page=${page}&_limit=8`)
        return res;
    }
    catch (error) {
        console.log(error)
    }
}
export const filterByKeyName = async (keyWord) => {
    try {
        const res = await http.get(`${urlApi}?name_like=${keyWord}&_limit=4`);
        return res;
    } catch (err) {
        alert(err);
    }
}

export const filterByKey = async (keyFilter) => {
    try {
        const res = await http.get(`${urlApi}?${keyFilter}`);
        return res;
    } catch (err) {
        alert(err);
    }
}
export const detailsProduct = async (id) => {
    try {
        const res = await http.get(`${urlApi}/${id}`);
        return res;
    }
    catch (error) {
        console.log(error)
    }
}