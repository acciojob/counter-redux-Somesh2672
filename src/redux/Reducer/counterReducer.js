const initialState= {count:0};

const couterReducer=(state=initialState,action)=>{

    switch(action.type){
        case 'INCREASE': return {...state,count:state.count+1}
        case 'DECREASE': return {...state,count:state.count-1}
        default: return initialState;
    }
}

export default couterReducer; 