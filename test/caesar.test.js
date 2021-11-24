// Write your tests here!
const { caesar , codeShift } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    describe("Error Handling", () => {
        it("It should return false if shift is greater than 25.", () => {
            const expected = false;
            const actual = caesar("zebra magazine",26);
            expect(actual).to.equal(expected);
        })

        it("It should return false if shift is less than -25.", () => {
            const expected = false;
            const actual = caesar("zebra magazine",-26);
            expect(actual).to.equal(expected);
        })

        it("If not shift value is entered, it should return False.", () => {
            const expected = false;
            const actual = caesar("zebra magazine");
            expect(actual).to.equal(expected);
        })

        it("If the shift amount entered is 0, it should return False.", () => {
            const expected = false;
            const actual = caesar("zebra magazine",0);
            expect(actual).to.equal(expected);
        })

    }) 
    describe("Encoding & decoding.", () => {

        it("It should encode properly.", () => {
            const expected = "cheud pdjdclqh";
            const actual = caesar("zebra magazine",3)
            expect(actual).to.equal(expected);
        })

        it("It should decode properly.", () => {
            const expected = "zebra magazine";
            const actual = caesar("cheud pdjdclqh",3,false)
            expect(actual).to.equal(expected);
        })

        it("It should ignore capital letters.", () => {
            const expected = "cheud pdjdclqh";
            const actual = caesar("Zebra Magazine",3)
            expect(actual).to.equal(expected);
        })

    })
})