import React from "react";
import { FcEmptyTrash } from "react-icons/fc";
import remove from "../redux/Userlist.js"
import { useSelector,useDispatch } from "react-redux";
export default function Usercard(props)
{
    const dispatch = useDispatch();
    console.log(props)
const del=()=>{
    console.log('clicked')
    
    dispatch(remove({ payload: props.item._id }));

}
    return(
        <div className="py-4 flex flex-col w-3/4  bg-black rounded-xl text-white mx-auto mt-10">
            <div className="flex flex-col text-xs  items-start ml-3 md:flex gap-3 md:justify-between px6 md:text-2xl md:w-[90%] md:mx-auto">
            <h1>Name:<span className="mx-3">{props.item.name}</span></h1>
            <h2>Cretaed at:<span className="mx-3">{props.item.createdAt}</span></h2>
            <h2>Email:<span className="mx-3">{props.item.email}</span></h2>
            </div>
            <div className="py-7 mt-3  md:text-2xl flex justify-between align-center w-[90%] mx-auto">
            <button className="w-22 bg-blue-500 rounded-lg md:px-3  md:py-2 hover:scale-105">View order History</button>
                <span onClick={del} ><FcEmptyTrash/></span>
           
            </div>
            
            
        </div>

    )
}