// TODO: figure out how to use import here so don't need to prepend 'b.'
// Currently jest doesn't like it because we're not in a module.
// But we are??
// import { add, complete, cycle, save, suite } from 'benny';
const u = require("../data_utils")
const b = require("benny")
const t = require("../bubble_sort")
import { generate_random_array } from "../data_utils"
const data = generate_random_array(100)

test("sort perf comparisons", () => {
    b.suite(
        'bubble sort',

        b.add('bubble sort', () => {
            t.bs(data)
        }),
        b.add('bubble sort with limit', () => {
            t.bs_limit(data)
        }),
        b.add('bubble sort with limit & destructured arr', () => {
            t.bs_limit_destructured(data)
        }),
        b.cycle(),
        b.complete(() => {
            "result of complete"
        })
    )
})

