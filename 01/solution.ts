#!/usr/bin/env -S deno run --allow-read 
import {
  aperture,
  apply,
  compose,
  curry,
  filter,
  length,
  lt,
  map,
  split,
  sum,
  __,
} from "https://deno.land/x/ramda/mod.ts";

const parseInts = compose(
  map(curry(parseInt)(__, 10)),
  split('\n'),
)

const input = await Deno.readTextFile('input.txt')
const part1 = 
  compose(
    length,
    filter(Boolean),
    map(apply(lt)),
    aperture(2),
    parseInts,
  )

const part2 =
  compose(
    length,
    filter(Boolean),
    map(apply(lt)),
    aperture(2),
    map(sum),
    aperture(3),
    parseInts,
  )

console.log('Part1:\t', part1(input))
console.log('Part2:\t', part2(input))
