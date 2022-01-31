import { fibo, fibom, fibo_with_memoise } from "../fibo";
import { add, complete, cycle, save, suite } from 'benny';

describe("narkster", () => {
    test("fib", () => {
        expect(fibo(0)).toEqual(0);
        expect(fibo(1)).toEqual(1);
        expect(fibo(2)).toEqual(1);
        expect(fibo(3)).toEqual(2);
        expect(fibo(4)).toEqual(3);
        expect(fibo(5)).toEqual(5);
        expect(fibo(6)).toEqual(8);
        expect(fibo(7)).toEqual(13);
        expect(fibo(8)).toEqual(21);
    }),
        test("fib (custom memoised)", () => {
            expect(fibom(0)).toEqual(0);
            expect(fibom(1)).toEqual(1);
            expect(fibom(2)).toEqual(1);
            expect(fibom(3)).toEqual(2);
            expect(fibom(4)).toEqual(3);
            expect(fibom(5)).toEqual(5);
            expect(fibom(6)).toEqual(8);
            expect(fibom(7)).toEqual(13);
            expect(fibom(8)).toEqual(21);
        }),
        test("fib (memoised with memoise)", () => {
            expect(fibo_with_memoise(0)).toEqual(0);
            expect(fibo_with_memoise(1)).toEqual(1);
            expect(fibo_with_memoise(2)).toEqual(1);
            expect(fibo_with_memoise(3)).toEqual(2);
            expect(fibo_with_memoise(4)).toEqual(3);
            expect(fibo_with_memoise(5)).toEqual(5);
            expect(fibo_with_memoise(6)).toEqual(8);
            expect(fibo_with_memoise(7)).toEqual(13);
            expect(fibo_with_memoise(8)).toEqual(21);
        })
})

describe("fibo performance tests", () => {
    suite(
        '10 fibs',
        add('fibs (crude)', () => {
            for (let i = 0; i < 10; i++) {
                fibo(i);
            }
        }),
        add('fibs (memoised)', () => {
            for (let i = 0; i < 10; i++) {
                fibom(i);
            }
        }),
        cycle(),
        complete()
    ),
        suite(
            '30 fibs',
            add('fibs (crude)', () => {
                for (let i = 0; i < 30; i++) {
                    fibo(i);
                }
            }),
            add('fibs (custom memoised)', () => {
                for (let i = 0; i < 30; i++) {
                    fibom(i);
                }
            }),
            add('fibs (memoised with function)', () => {
                for (let i = 0; i < 30; i++) {
                    fibo_with_memoise(i);
                }
            }),
            cycle(),
            complete()
        )
})