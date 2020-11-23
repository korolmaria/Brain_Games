#!/usr/bin/env node
import { getResult } from '../src/index.js';
import {
  question, countNums, getMathString, getRightAnswer,
} from '../games/progressionNum.js';

getResult(question, countNums, getMathString, getRightAnswer);
