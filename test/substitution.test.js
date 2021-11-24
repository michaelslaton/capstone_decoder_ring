const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe ("Substitution()", ()=>{
    describe ("Error Handling.", ()=>{
        it("Should return False if no Cipher Alphabet is entered.", ()=>{
            const expected = false;
            const actual = substitution("hello");
            expect(actual).to.equal(expected);
        })
        
        it("Should return False if the entered Cipher Alphabet is more or less than 26 characters.", ()=>{
            const expected = false;
            const actual = substitution("hello","abcdefghijklmnopqrstuvwxy");            
            expect(actual).to.equal(expected);
        })

        it("Should return False if there are repeated characters in the Cipher Alphabet.", ()=>{
            const expected = false;
            const actual = substitution("hello","abcdefghijklmnopqrstuvwxyy");
            expect(actual).to.equal(expected);
        })
    })

    describe ("Encoding & Dedcoding.", ()=>{
        it("Should properly encode the input.", ()=>{
            const expected = "jkvvc";
            const actual = substitution("hello","plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal(expected);
        })

        it("Should properly decode the input.", ()=>{
            const expected = "hello";
            const actual = substitution("jkvvc","plmoknijbuhvygctfxrdzeswaq", false);
            expect(actual).to.equal(expected);
        })

        it("Should leave spaces in place.", ()=>{
            const expected = "jkvvc scxvo";
            const actual = substitution("hello world","plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal(expected);
        })

        it("Should ignore capital letters.", ()=>{
            const expected = "jkvvc";
            const actual = substitution("Hello","plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.equal(expected);
        })
    })
})