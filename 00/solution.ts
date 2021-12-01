#!/usr/bin/env -S deno run --allow-read 
import { compose, split } from "https://deno.land/x/ramda/mod.ts";

const parseInts = compose(
  parseInt,
  split('\n'),
)

const input = await Deno.readTextFile('input.txt')
const part1 = 
  compose(
    parseInts,
  )

const part2 =
  compose(
    parseInts,
  )

console.log(part1(input))
console.log(part2(input))
