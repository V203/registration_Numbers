describe("Setting and getting the values",function(){
    it("The Test take in a number plate in small letters and it should capitalize the first two characters",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("ca345345")
        assert.deepEqual("CA 345345", RgNm_.getCA())
        

    })
    it("The test should check if whether the ",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("CA345345")
        assert.equal("CA 345345", RgNm_.getCA())
    })
    it("The test should check if the getCY would return ",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("CY321323")
        assert.equal("CY 321323",RgNm_.getCY())

    })

    it("The test should return an error message if user inputs invalid characters",function(){
        let RgNm_ = RgNm()
       
        assert.equal("You have entered an invalid length of characters.", RgNm_.setPlates("cy 091223"))

    })
    it("The test should clear the ",function(){

        let RgNm_ = RgNm()
        RgNm_.setPlates("ca123433")
        RgNm_.setPlates("ca323441")
        // RgNm_.setPlates("cy123433")
        // RgNm_.setPlates("cy323441")
        // RgNm_.setPlates("cw123433")
        // RgNm_.setPlates("cw323441")
        assert.equal([ "CA 123433", "CA 323441" ],RgNm_.getAll())
    })



})