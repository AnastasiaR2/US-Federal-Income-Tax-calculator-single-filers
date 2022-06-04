
  const rate1 = 0.1;
  const rate2 = 0.12;
  const rate3 = 0.22;
  const rate4 = 0.24;
  const rate5 = 0.32;
  const rate6 = 0.35;
  const rate7 = 0.37;

  const range1 = 9950;
  const range2 = 40525;
  const range3 = 86375;
  const range4 = 164925;
  const range5 = 209425;
  const range6 = 523600;

  const deduction = 12550;

  let income = +prompt('Your Income (in USD)');
  let taxableIncome;
  let fitSum;

  console.log(`Your Income (in USD): ${income}`);

  if(income <= deduction){

    fitSum = 0;

  }else{

    taxableIncome = income - deduction;

    console.log(`Your Taxable Income: ${taxableIncome}`);

  }

  if(taxableIncome <= range1){

    fitSum = rate1 * taxableIncome;

  }else if(taxableIncome > range1 && taxableIncome <= range2){

    fitSum = rate1 * range1 + rate2 * (taxableIncome - range1);

  }else if(taxableIncome > range2 && taxableIncome <= range3){

    fitSum = rate1 * range1 + rate2 * (range2 - range1) + rate3 * (taxableIncome - range2);

  }else if(taxableIncome > range3 && taxableIncome <= range4){

    fitSum = rate1 * range1 + rate2 * (range2 - range1) + rate3 * (range3 - range2) + rate4 * (taxableIncome - range3);

  }else if(taxableIncome > range4 && taxableIncome <= range5){

    fitSum = rate1 * range1 + rate2 * (range2 - range1) + rate3 * (range3 - range2) + rate4 * (range4 - range3) + rate5 * (taxableIncome - range4);

  }else if(taxableIncome > range5 && taxableIncome <= range6){

    fitSum = rate1 * range1 + rate2 * (range2 - range1) + rate3 * (range3 - range2) + rate4 * (range4 - range3) + rate5 * (range5 - range4) + rate6 * (taxableIncome - range5);

  }else if(taxableIncome > range6){

    fitSum = rate1 * range1 + rate2 * (range2 - range1) + rate3 * (range3 - range2) + rate4 * (range4 - range3) + rate5 * (range5 - range4) + rate6 * (range6 - range5) + rate7 * (taxableIncome - range6);

  }

  fitSum = Math.round(fitSum * 100) / 100;

  console.log(`Your FIT Sum: ${fitSum}`);