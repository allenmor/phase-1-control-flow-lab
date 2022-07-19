function scuberGreetingForFeet(a){
  // Write your code here!
  if (a <= 400) {
    return 'This one is on me!';
  } else if (a >= 400 && a <= 2000) {
    return 'That will be twenty bucks.'
  } else if (a > 2000 && a <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(b){
  // Write your code here!
  return b === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(c){
  // Write your code here!
  switch(c) {
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
        default:
          return 'Bye.'
  } 
}