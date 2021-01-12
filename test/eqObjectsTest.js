const assert = require('chai').assert; 
const eqObjects = require('../eqObjects');

// Test Cases for eqObjects 
describe("#eqObjects", () => {

  it("returns true for comparing {a: '1', b: '2'} with {b: '2', a: '1'}", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba), true);
  });

  it("returns false for comparing {a: '1', b: '2'} with {a: '1', b: '2', c: '3'}", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc), false);
  });

  it("returns true for comparing {c: '1', d: ['2', 3]} with {d: ['2', 3], c: '1'}", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc), true);
  });

  it("returns false for comparing {c: '1', d: ['2', 3]} with { c: '1', d: ['2', 3, 4]}", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2), false);
  });

  it("returns false for comparing { f: '1', g: '2' } with { f: '2', g: '2'}", () => {
    const fg = { f: "1", g: "2" };
    const gf = { f: "2", g: "2" };
    assert.isFalse(eqObjects(fg, gf), false);
  });

  it("returns false for comparing {a: '1', b: '2'} with { f: '2', g: '2'}", () => {
    const ab = { a: "1", b: "2" };
    const fg = { f: "1", g: "2" };
    assert.isFalse(eqObjects(ab, fg), false);
  });

  it("returns true for comparing { a: { z: 1 }, b: 2 } with { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for comparing { a: { y: 0, z: 1 }, b: 2 } with { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it("returns false for comparing { a: { y: 0, z: 1 }, b: 2 } with { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  it("returns false for comparing { a: { z: [4, 5, 6] }, b: 2 } with { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { z: [4, 5, 6] }, b: 2 }, { a: { z: 1 }, b: 2 }) , false);
  });

  it("returns false for comparing { a: { z: [4, 5, 6] }, b: 2 } with { a: [2, 3]}", () => {
    assert.isFalse(eqObjects({ a: { z: [4, 5, 6] }, b: 2 }, { a: [2, 3]}) , false);
  });
  
});
