import { add, complete, cycle, save, suite } from 'benny';
import { bs, bs_limit, bs_limit_destructured } from '../bubble_sort'
import { generate_random_array } from "../data_utils"
import { selsort } from "../selection_sort"
const { shuffled, sorted } = generate_random_array(10)

// TODO: package up tests with metadata to automate this

// perf tests
test("sort perf comparisons", () => {
    suite(
        'Sort algo comparisons',
        add('bubble sort', () => {
            bs(shuffled)
        }),
        add('bubble sort with limit', () => {
            bs_limit(shuffled)
        }),
        add('bubble sort with limit & destructured arr', () => {
            bs_limit_destructured(shuffled)
        }),
        add('selection sort', () => {
          selsort(shuffled)
        }),
        cycle(),
        complete(() => {
            "result of complete"
        })
    )
})

// correctness tests
// TODO: add for bubble
test("dev", () => {
    // TODO: give test names & how to group?
    must_not_mutate(selsort)
    expect(selsort(shuffled)).toEqual(sorted);
})

function must_not_mutate(fn) {
    const arr = [];
    expect(fn(arr)).not.toBe(arr)
}
