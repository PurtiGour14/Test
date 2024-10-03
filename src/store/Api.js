import { getdata } from "./ProductSlice";

import axios from "axios";

export const  asyncdata  =() => async (dispatch,getState)=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    dispatch(getdata(res.data));
};





    


