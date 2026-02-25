/*
 * Example functions to practice JavaScript
 *
 * Gilberto Echeverria
 * 2025-02-12
 */

"use strict";
let str = 'abacddbec'
function firstNonRepeating(str){
    //create aan empty array to store candidates
    const candidates = [];
    //create empty array to store the cands
    for (let i=0 ; i<str.length ; i++){
        //compare agaoinst the candidates
        let found = false;
        for (let cand of candidates){
            if(cand.char == str[i]){
                cand.count+=1;
                found = true;
            }
        }
        if(!found){
            candidates.push({char:str[i],count:1});
        }
        //console.log(candidates);
    }
    for (let index in candidates){
        if(candidates[index].count == 1){
            return candidates[index].char;
        }
    }

}

function bubbleSort(num){
    for(let i=1; i<num.length;i++){
        for(let j=0; j<num.length-1;j++){
            if(num[j] > num[j+1]){
                let a = num[j];
                num[j]=num[j+1];
                num[j+1] = a;
            }
        }
    }
    return num;
}


const Numbers = [];
function invertArray(Numbers){
    const inverseNumbers = [];
    for(let i=0 ; i<Numbers.length; i++){
        inverseNumbers.unshift(Numbers[i])
    }
    return inverseNumbers;
}

function invertArrayInplace(Numbers){ 
    for(let i=0; i < Numbers.length / 2; i++){
        let temporal = Numbers[i];
        Numbers[i] = Numbers[Numbers.length-1-i];
        Numbers[Numbers.length-1-i] = temporal;   
    }
    //console.log(Numbers);
    return Numbers;   
}

function capitalize(str){
    const strArray= [];
    let upper = str.toUpperCase()
    for (let i=0; i<str.length;i++){
        if(i == 0){
            strArray.push(upper[0]);
        }
        else{
            if (str[i-1] == ' '){
                strArray.push(upper[i]);
            }
            else{
                 strArray.push(str[i]);
            }
            
        }
    }
    let arrStr = strArray.join("") ; 
    return arrStr;
}

function mcd(Int1,Int2){
    const NumA = [];
    const NumB = [];
    const Cnd = [];
    let Result = 0;
    for(let i = 1; i <= Int1; i++){
        if (Int1 % i === 0){
            NumA.push(i);
        }
    }
    for(let j = 1; j <= Int2; j++){
        if (Int2 % j === 0){
            NumB.push(j);
        }
    }
    for(let k = 0; k < NumA.length; k++){
        if(NumB.includes(NumA[k])){
            Cnd.push(NumA[k]);
        }
    }
    for(let m = 0; m < Cnd.length; m++){
        if (Cnd[m] > Result){
            Result = Cnd[m];
        }
    };
    return Result;
}

function hackerSpeak(strin){
    const hack =[];
    for (let i=0; i<strin.length;i++){
        if (strin[i] == 'a' || strin[i] == 'A'){
            hack.push(4);
        }
        else if(strin[i] == 'e' || strin[i] == 'E'){
            hack.push(3);
        }
        else if(strin[i] == 'i' || strin[i] == 'I'){
            hack.push(1);
        }
        else if(strin[i] == 's' || strin[i] == 'S'){
            hack.push(5);
        }
        else if(strin[i] == 'o' || strin[i] == 'O'){
            hack.push(0);
        }
        else{
            hack.push(strin[i])
        }
    }
    let hacker = hack.join("");
    return hacker;
}

function factorize(int){
    const factors =[]
    for(let i=1; i<=int;i++ ){
        if (int%i ==0){
            factors.push(i);
        }
    }
    return factors;
}

function deduplicate(arr){
    const notwos = [];
    for(let i = 0; i<arr.length;i++){
        if(notwos.includes(arr[i])){

        }
        else{
            notwos.push(arr[i]);
        }
    }
    return notwos;
}

function findShortestString(strlist){
    const short = [];
    let smallest = 0;    ;
    for(let i=0; i<strlist.length;i++){
        let size = strlist[i].length;
        short.push(size);
    }
    for(let j=0;j<short.length;j++){
        smallest = short[0];
        if(short[j] < smallest){
            smallest = short[j];
        }   
    }
    return smallest;
}

function isPalindrome(pal){
    const reverse = [];
    for (let i=0; i<pal.length;i++){
        reverse.unshift(pal[i]);
    }
    let reversed = reverse.join("");
    if(reversed == pal){
        return true;
    }
    else{
        return false;
    }
}

function sortStrings(Words){
    //const frst = [];
    Words.sort((a, b) => {
    let first = a[0].localeCompare(b[0]);
    if (first !== 0){
        return first;
    }
    return a.localeCompare(b);
    });
    return Words;
}

function stats(STATS) {
    if (STATS.length === 0) {
        return [0, 0];
    }

    let sum = 0;
    let freq = {};
    let mode = STATS[0];
    let maxCount = 0;

    for (let i = 0; i < STATS.length; i++) {
        sum += STATS[i];

        freq[STATS[i]] = (freq[STATS[i]] || 0) + 1;

        if (freq[STATS[i]] > maxCount) {
            maxCount = freq[STATS[i]];
            mode = STATS[i];
        }
    }

    let avg = sum / STATS.length;
    return [avg, mode];
}

function popularString(Popular){
    if (Popular.length === 0){
        return '';
    }
    let freq = {};
    let popular = Popular[0];
    let maxCount = 0;

    for(let i=0; i<Popular.length;i++){
        freq[Popular[i]] = (freq[Popular[i]] || 0) + 1;

        if(freq[Popular[i]]>maxCount){
            maxCount = freq[Popular[i]];
            popular = Popular[i];
             
        }
    }
    return popular;
}

function isPowerOf2(NUM){
    let index = true;
    while(index){
        if(NUM === 1){
            return true;
        }
            if(NUM % 2 !== 0){
                return false;
            }
            else{
                NUM = NUM / 2;
            }
    }
}

function sortDescending(ARRAY){
    ARRAY.sort((a, b) => b-a );
    return ARRAY;
}


export {
    firstNonRepeating,
    bubbleSort ,
    invertArray ,
    invertArrayInplace,
    capitalize,
    mcd,
    hackerSpeak,
    factorize,
    deduplicate,
    findShortestString,
    isPalindrome,
    sortStrings,
    stats,
    popularString,
    isPowerOf2,
    sortDescending,
};
