function RgNm() {
    let plateAll={
        plateCA:{},
        plateCY:{},
        plateCW:{},
        all:function(){
        return [this.plateCA  ,this .plateCW, this.plateCY]
        }


    }
    function getAll() {
       return Object.keys(plateAll.all())
        
    }
console.log(plateAll)
    

    function getCA() {
        return Object.keys(plateAll.plateCA)
    }
    function getCY() {
        return Object.keys(plateAll.plateCY)
    }
    function getCW() {
        return Object.keys(plateAll.plateCW)
    }
    function setPlates(par) {

        var par_ = par.toUpperCase().trim()
        if( (par_.startsWith("CA") || par_.startsWith("CY")) || par_.startsWith("CW")){
         
       if (plateAll.plateCA[par_]===undefined && par_.startsWith("CA")) {
        plateAll.plateCA[par_]=0
        }
        else if(plateAll.plateCY[par_]===undefined && par_.startsWith("CY")) {
            plateAll.plateCY[par_]=0
        }
        else if (plateAll.plateCW[par_]===undefined && par_.startsWith("CW")) {
            plateAll.plateCW[par_]=0
        }

    }
    else{
        return "This is an error message"
    }
        

    }
    function clearError(par){
        par = ""
    }


    return {
        getAll,
        getCA,
        getCY,
        getCW,
        setPlates,
        clearError
    }
}