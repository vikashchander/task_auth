function getStorageValue() {
    // getting stored value
    let defaultValue={
        usersDetails: [],
        isLogin: false,
        loadCropDetails: [],
    }
    const saved = localStorage.getItem("data");
    const initial = JSON.parse(saved);
    console.log(initial);
    const res =  JSON.stringify(saved) === JSON.stringify({})
    
    if(res ===true){
        return defaultValue
    }
    return initial;
  }

  export default getStorageValue;