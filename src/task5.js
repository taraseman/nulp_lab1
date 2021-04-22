'use strict'

const dates=[];
dates.push(new Date("2014/05/25"))
dates.push(new Date("2020/06/07"))
dates.push(new Date("2022/01/27"))
dates.push(new Date("2018/04/01"))
console.log(`all dates: ${dates}`);

const maxDate = new Date(Math.max.apply(null,dates));

console.log(`max date: ${maxDate}`);