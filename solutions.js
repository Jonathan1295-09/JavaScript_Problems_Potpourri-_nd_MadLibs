/////////////////////////////////
/// setAlarm
/////////////////////////////////

{
const setAlarm = {
    employed: true,
    vacationing: true,
}
console.log(setAlarm)
}

/////////////////////////////////
/// Count Odd Numbers
/////////////////////////////////

{
  

}


////////////////////////////////
///// Disemvoweling Trolls
////////////////////////////////

{
   
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
    .join('');
    }

}
console.log(disemvowel('This website is for losers LOL!'));

///////////////////////////////
// Bank Account Summary
///////////////////////

{
    const bankInfo = [ {
        savings: 600,
        checking: 800,
        moneyMarket: 200,
        creditCard: -2000,
    }];
    
     const bankAccountSummary = bankInfo.reduce((accumalator, item, index) => {
        return accumalator + index 
     },)
console.log(bankAccountSummary)
     

}