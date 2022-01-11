import { add, complete, cycle, save, suite } from 'benny';
import {bs, bs_limit, bs_limit_destructured} from '../bubble_sort'
import { generate_random_array } from "../data_utils"
const data = generate_random_array(100)

test("sort perf comparisons", () => {
    suite(
        'bubble sort',

        add('bubble sort', () => {
            bs(data)
        }),
        add('bubble sort with limit', () => {
            bs_limit(data)
        }),
        add('bubble sort with limit & destructured arr', () => {
            bs_limit_destructured(data)
        }),
        cycle(),
        complete(() => {
            "result of complete"
        })
    )
})

