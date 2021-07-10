import axios from 'axios'
//import { response } from 'express'


// axios.interceptors.request.use(function(req){
//     return req.data
// })

axios.interceptors.response.use(function(res){
    return res.data;
})

export let getUser = ()=>{
    return axios.get('http://localhost:8088/asd')
}