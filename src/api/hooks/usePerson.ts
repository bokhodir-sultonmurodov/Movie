import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const usePerson = ()=>{
    const getPerson=(id:string)=>
        useQuery({
            queryKey:["person",id],
            queryFn:()=>
                api.get(`person/${id}`).then((res)=>res.data)
        })
    
    const getPersonFilms=(id:string)=>
        useQuery({
            queryKey:["personfilms",id],
            queryFn:()=>
                api.get(`person/${id}/movie_credits`).then((res)=>res.data)
        })
    const getPersonSerials=(id:string)=>
        useQuery({
            queryKey:["personfilms",id],
            queryFn:()=>
                api.get(`person/${id}/tv_credits`).then((res)=>res.data)
        })
    
    return {getPerson,getPersonFilms,getPersonSerials}}