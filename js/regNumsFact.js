function RgNm(stored) {

    var plateAll = stored || [];
   
    // .replace(/([A-Z])(\d)/g, "$1 $2")
    function setPlates(par_){
      let  par = par_.toUpperCase().trim().replace(/ /g,"")
        if(par.startsWith("CA") || par.startsWith("CW") || par.startsWith("CY")){
            if(!plateAll.includes(par)){
                plateAll.push(par)
                
            }
            else if(plateAll.includes(par)){
                return "Reg Number already exist in the data base."
            }
          
            }else{
                return "You have entered an invalid reg number, make sure your reg number starts with CA ,CW or CY. eg CA121212"
           }
    }
    

    function getPlates(){
        return plateAll
    }

    return {
        setPlates,
        getPlates
    }
}