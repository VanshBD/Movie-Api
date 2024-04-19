let arr=[]

export const myReducer=(state=arr,action)=>{
    if (action.type=="ADD") {
        state=[
            ...state,action.payload
        ]
        console.log(state);
    }else{
        console.log("object1");
    }
    return state
}