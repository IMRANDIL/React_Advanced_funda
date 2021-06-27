
const reducer = (state,action)=>{
    if(action.type === 'ADD_ITEM'){
      const newPeople = [...state.people,action.payload]
      return {...state, people:newPeople,isModalOpen:true,modalContent:'item added to the list'}
    }
    
    
    if(action.type === 'NO_VALUE'){
      return {...state, isModalOpen:true, modalContent:'please enter value'}
    }
    
    if(action.type === 'CLOSE_MODAL'){
      return {...state, isModalOpen:false, modalContent:''}
    }
    if(action.type === 'REMOVE'){
      const newPeople = state.people.filter((person)=>person.id !== action.payload);
      return {...state, people:newPeople, isModalOpen:true, modalContent:'item removed'}
    }
    // return state;
    
    throw new Error('no matching action type')
    }


    export default reducer;