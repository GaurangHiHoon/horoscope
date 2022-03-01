import axios from 'axios';

axios.interceptors.response.use(null,error=>{
    const expectedErrors=error.response&&error.response>=400&&error.response<=500;
    if(expectedErrors){
        return Promise.reject;
    }
    alert('API is not functioning properly, kindly refresh ');
})

export default{
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}