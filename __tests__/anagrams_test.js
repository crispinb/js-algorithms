import anagrams from "../anagrams"
// run only uncommitted tests jest -o

describe("correctness tests", () => {
    test("empty string -> no anagrams", () => {
        expect(anagrams("")).toEqual([""]);
    }),
    test("single char string -> self", () => {
        expect(anagrams("x")).toEqual(["x"]);
    }),
    test("xy -> xy & yx", () => {
        const s = "xy";
        const expected = ["xy", "yx"]
        expect(anagrams(s)).toEqual(expect.arrayContaining(expected));
        expect(anagrams(s).length).toEqual(expected.length);
    }),
    test("xyz -> [xyz .. etc]", () => {
        const s = "xyz";
        const expected = ["xyz", "xzy", "zxy", "zyx", "yzx", "yxz"]
        expect(anagrams(s)).toEqual(expect.arrayContaining(expected));
        expect(anagrams(s).length).toEqual(expected.length);
    })
})

// Little point in perf tests here since it'll always be O(N!)?


