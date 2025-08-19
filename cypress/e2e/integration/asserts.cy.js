/// <reference types="cypress"/>

it("Equality", ()=> {
    const a = 1;
    expect(a).equal(1);
    expect(a, "It should be 1").equal(1)
    expect(a).to.be.equal(1);
    expect("a").not.equal("b")
})

it("Truthy", ()=> {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(a).not.null;
    expect(c).to.be.undefined
})

it("Object Equality", ()=> {
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj)
    expect(obj).deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property("b")
    expect(obj).to.have.property("b",2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty

})

it("Arrays",()=> {
    const arr = [1,2,3];
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it("Types", ()=> {
    const num = 1;
    const str = "String";

    expect(num).to.be.a("number")
    expect(str).to.be.a("string")
    expect({}).to.be.an("object")
    expect([]).to.be.an("array")

})

it("String", ()=> {
    const str = "test string";

    expect(str).equal("test string")
    expect(str).length(11)
    expect(str).contains("string")
    expect(str).match(/test/)
    expect(str).to.match(/^test/)
    expect(str).match(/string$/)
    expect(str).to.match(/.{11}/)
    expect(str).to.match(/\W+/)//apenas letras (1 ou mais)
    expect(str).to.match(/\D+/)//nao contem numeros

})
it("Numbers", ()=> {
    const number = 4;
    const floatNumber = 5.1223


    expect(number).equal(4)
    expect(number).above(3)
    expect(number).below(5)
    expect(floatNumber).to.be.closeTo(5.2,0.1)
    expect(floatNumber).above(5)
    expect(floatNumber).below(6)

})