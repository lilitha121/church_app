const initialState = {
  addPhoto: "",
  nameAndSurname:"",
  age:"",
  phoneno: "",
  address: "",
  postalCode: "",
  church:"",
  block:"",
  

  };
  
  function addReducer(state = initialState, action) {
      
    switch(action.type) {
      case 'SUBMIT':
        return {
            addPhoto:action.payload.addPhoto,
            nameAndSurname:action.payload.nameAndSurname,
            age:action.payload.age,
            phoneno:action.payload.phoneno,
            address:action.payload.address,
            pincode:action.payload.pincode,
            church:action.payload.church,
            block:action.payload.block,

            

        }
      default:
        return state;
    }
  }
  
  export default addReducer;