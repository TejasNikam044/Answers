function validateNumber(input) {
  var re =
    /^\s*(?:\+?(\d{1,3}))?[-. (](\d{3})[-. )](\d{3})[-. ](\d{4})(?: *x(\d+))?\s$/;

  console.log(re.test(input));
}

validateNumber("2124567890");
validateNumber("212-456-7890");
validateNumber("(212)456-7890");
validateNumber("(212)-456-7890");
validateNumber("212.456.7890");
validateNumber("212 456 7890");
validateNumber("+12124567890");
validateNumber("+12124567890");
validateNumber("+212-456-7890");
validateNumber("1-2124567890");
