function RgNm(stored) {

    var plateAll = stored || [];

    function setPlates(par__) {
        let par_ = par__.toUpperCase().trim().replace(/ /g,"")
        let alphaPar = par_.slice(0,2);
        let numPar = par_.slice(2)
        let par = alphaPar + numPar
        if(/^[0-9]+$/.test(numPar)===false){
            return "Please enter the appropriate reg Nr eg CA 121212 ,CY656565 or CW 565656."
        }
        
        else if (par.length !== 8) {
            return "Invalid length of characters entered in the text field"

        } 

        if (par.startsWith("CA") || par.startsWith("CW") || par.startsWith("CY")) {
            if (!plateAll.includes(par)) {
                plateAll.push(par)

            }
            else if (plateAll.includes(par)) {
                return "Reg Number already exist in the data base."
            }

        } else {
            return "You have entered an invalid reg number, make sure your reg number starts with CA ,CW or CY. eg CA121212"
        };
    };


    function getPlates() {
        return plateAll
    }

    return {
        setPlates,
        getPlates
    }
}