const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", ()=>{
    describe("Encoding & Decoding.", ()=>{
        it("Should properly encode a message.", ()=>{
            const expected = "3251131343";
            const actual = polybius("hello");
            expect(actual).to.equal(expected);
        })

        it("Should properly decode messages.", ()=>{
            const expected = "world";
            const actual = polybius("2543241341", false);
            expect(actual).to.equal(expected);
        })

        it("Should ignore capital letters.", ()=>{
            const expected = "3251131343";
            const actual = polybius("Hello");
            expect(actual).to.equal(expected);
        })

        it("Should encode I and J to 42.", ()=>{
            const expected = "42 42";
            const actual = polybius("i j");
            expect(actual).to.equal(expected);
        })

        it("Should decode 42 to i/j.", ()=>{
            const expected = "i/j";
            const actual = polybius("42", false);
            expect(actual).to.equal(expected);
        })

        it("Should leave spaces where they are.", ()=>{
            const expected = "3251131343 2543241341";
            const actual = polybius("Hello World");
            expect(actual).to.equal(expected);
        })

    })

    describe("Error handling.", ()=>{
        it("Should return False if the amount of numbers entered is odd.", ()=>{
            const expected = false;
            const actual = polybius("3251131343 254324134", false);
            expect(actual).to.equal(expected);
        })

    })
})