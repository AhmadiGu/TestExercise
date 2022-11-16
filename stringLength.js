const stringLength = (string) => {
   if(string.length > 0 && string.length < 10) {
     return string.length;
   }
   else if(string.length <= 0) {
    throw new Error('The string must be at least 1 char')
   }
   else if(string.length >= 10) {
    throw new Error('The string must be from 0 to 10 char its more than 10')
   }
}
module.exports = stringLength;