import { add, complete, cycle, save, suite } from 'benny';
import { bs, bs_limit, bs_limit_destructured } from '../bubble_sort'
import { generate_random_array } from "../data_utils"
import { selsort, selsort_destructure_swap } from "../selection_sort"
import { insertion_sort } from "../insertion_sort"
const { shuffled, sorted } = generate_random_array(1000)

// add `.only` to a test name to limit to that test for debugging

// TODO: package up tests with metadata to automate this

// perf tests
describe("perf tests", () => {
    test("sort perf comparisons", () => {
        suite(
            'Sort algo comparisons',
            add('bubble sort', () => {
                bs(shuffled);
            }),
            add('bubble sort with limit', () => {
                bs_limit(shuffled);
            }),
            add('bubble sort with limit & arr destructuring', () => {
                bs_limit_destructured(shuffled)
            }),
            add('selection sort', () => {
                selsort(shuffled);
            }),
            add('selection sort with arr destructuring', () => {
                selsort_destructure_swap(shuffled)
            }),
            add('insertion Sort', () => {
                insertion_sort(shuffled);
            }),
            cycle(),
            complete(() => {
                "result of complete"
            })
        )
    })
})


// correctness tests
describe("correctness tests", () => {
    test("bubble sort", () => {
        must_not_mutate(bs)
        expect(bs(shuffled)).toEqual(sorted);
    }),
        test("bubble_sort_with_limit", () => {
            must_not_mutate(bs_limit)
            expect(bs_limit(shuffled)).toEqual(sorted);
        }),
        test("bubble sort", () => {
            must_not_mutate(bs_limit_destructured)
            expect(bs_limit_destructured(shuffled)).toEqual(sorted);
        }),
        test("selection sort", () => {
            must_not_mutate(selsort)
            expect(selsort(shuffled)).toEqual(sorted);
        }),
        test("selection sort with arr destructuring", () => {
            must_not_mutate(selsort_destructure_swap)
            expect(selsort_destructure_swap(shuffled)).toEqual(sorted);
        }),
        test("insertion Sort", () => {
            must_not_mutate(insertion_sort)
            expect(insertion_sort(shuffled)).toEqual(sorted);
        })
})

test("dev", () => {
    // TODO: give test names & how to group?
    must_not_mutate(selsort)
    expect(selsort(shuffled)).toEqual(sorted);
})

function must_not_mutate(fn) {
    const empty_array = [];
    expect(fn(empty_array)).not.toBe(empty_array);
    const arr = [1, 2, 3, 4];
    expect(fn(arr)).not.toBe(arr);
}
