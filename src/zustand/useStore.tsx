import { create } from 'zustand'

type Store = {
  saved: any[],
  toggleSave: (payload:any)=>void
}

export const useStore = create<Store>()((set) => ({
    saved:[],
    toggleSave: (payload:any)=>set((state)=>{
        const exist = state.saved.some(item=>item.id===payload.id)
        if(exist){
            return {saved:state.saved.filter(item=>item.id!==payload.id)}
        }else{
            return {saved:[...state.saved, payload]}
        }
        
    })
}))

