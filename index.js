// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return 'This Saturday, I want to ' + activity + '!';
}
saturdayFun ( ' bathe my dog');

function mondayWork ( activity = 'go to the office') {
    return 'This Monday, I will ' + activity + '.'
}
mondayWork ('work from home')

function wrapAdjective (gift) {
    if (gift === '*') {
        return function (today = 'special') {
            return `You are *${today}*!`
    }
    
    } else if (gift === '||') {
        return function (fine) {
            return `You are ||${fine}||!`
        }
    }
    
}
wrapAdjective ('*')('a hard worker')
wrapAdjective ('||')('a dedicated programmer')