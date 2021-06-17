describe("Rgeistration Numbers unit test", function () {
    describe("Setting and getting the values", function () {
        it("The Test take in a number plate in small letters and it should capitalize the first two characters", function () {
            let RgNm_ = RgNm();
            RgNm_.setPlates("ca345345");
            assert.deepEqual(['CA345345'], RgNm_.getPlates())
        })

        it("Should take in three number plates and return array array that holds three number plates", function () {
            let RgNm_ = RgNm();
            RgNm_.setPlates("CW343434");
            RgNm_.setPlates("CY343434");
            RgNm_.setPlates("Ca343434");
            assert.deepEqual(['CW343434', 'CY343434', 'CA343434'], RgNm_.getPlates())
        })
        it("Should try to insert three identical registration numbers in the array but the test should only return one plate. ", function () {
            let RgNm_ = RgNm();
            RgNm_.setPlates("Cw343434");
            RgNm_.setPlates("Cw343434");
            RgNm_.setPlates("Cw343434");
            assert.deepEqual(['CW343434'], RgNm_.getPlates())
        })
        it("The test should take in registration number with space in between the characters and replace all whitespaces", function () {
            let RgNm_ = RgNm();
            RgNm_.setPlates("CW3 4 3    4 3 4");
            assert.deepEqual(['CW343434'], RgNm_.getPlates())
        })
        it("The test should take in registration number with whitespace in the beginning and the end, then trim all  whitespaces from both sides", function () {
            let RgNm_ = RgNm();
            RgNm_.setPlates("       CW343434        ");
            assert.deepEqual(['CW343434'], RgNm_.getPlates())
        });


        describe("User error detection", function () {
            it("The test should return an error if the user inputs an invalid number plate, that does not start with CA , CW or CY.", function () {
                let RgNm_ = RgNm();
                RgNm_.setPlates("CL121212")
                assert.equal("You have entered an invalid reg number, make sure your reg number starts with CA ,CW or CY. eg CA121212", RgNm_.setPlates("CL121212"))
            });
            it("Should warn the user if the user sets a plate that already exist in the database.", function () {
                let RgNm_ = RgNm();
                RgNm_.setPlates("CA321321");
                RgNm_.setPlates("CA321321");
                assert.equal("Reg Number already exist in the data base.", RgNm_.setPlates("CA321321"))
            })
        });
    });
})

