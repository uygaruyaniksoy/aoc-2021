#!/bin/bash

# if the folder is not created for the day create from the template
[ -d $1 ] || cp -r 00 $1

# if cookie specified fetch the input from aoc directly
# specify cookie by => $ export AOC_COOKIE="session=....."
[ $AOC_COOKIE ] && curl --cookie "$AOC_COOKIE" https://adventofcode.com/2021/day/1/input > "$1/input.txt"

# change into solution directory and execute solution.ts
# while listening to changes in the folder
cd $1 && ls | entr ./solution.ts

