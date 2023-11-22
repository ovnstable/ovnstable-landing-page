/* eslint-disable default-case */
import BN from 'bn.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';

const accounting = require('accounting-js');

const accountingConfig = {
  symbol: '',
  precision: 6,
  thousand: ' ',
};

const accountingFourConfig = {
  symbol: '',
  precision: 4,
  thousand: ' ',
};

const accountingThreeConfig = {
  symbol: '',
  precision: 3,
  thousand: ' ',
};

const accountingSecondConfig = {
  symbol: '',
  precision: 2,
  thousand: ' ',
};

const accountingFirstConfig = {
  symbol: '',
  precision: 1,
  thousand: ' ',
};

const accountingZeroConfig = {
  symbol: '',
  precision: 0,
  thousand: ' ',
};

const accountingFourConfigComma = {
  symbol: '',
  precision: 4,
  thousand: ',',
};

const accountingFiveConfigComma = {
  symbol: '',
  precision: 5,
  thousand: ',',
};

const accountingSixConfigComma = {
  symbol: '',
  precision: 6,
  thousand: ',',
};

const accountingSevenConfigComma = {
  symbol: '',
  precision: 7,
  thousand: ',',
};

const accountingEightConfigComma = {
  symbol: '',
  precision: 8,
  thousand: ',',
};

const accountingNineConfigComma = {
  symbol: '',
  precision: 9,
  thousand: ',',
};

const accountingSecondConfigComma = {
  symbol: '',
  precision: 2,
  thousand: ',',
};

const accountingFirstConfigComma = {
  symbol: '',
  precision: 1,
  thousand: ',',
};

const accountingZeroConfigComma = {
  symbol: '',
  precision: 0,
  thousand: ',',
};

const possibleTextForRandom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default {
  getRandomString(randomLength = 10) {
    let text = '';

    for (let i = 0; i < randomLength; i += 1) {
      text
        += possibleTextForRandom.charAt(Math.floor(Math.random() * possibleTextForRandom.length));
    }

    return text;
  },

  formatNumberToPercent(value, maxValue) {
    // eslint-disable-next-line no-mixed-operators
    return (value / maxValue * 100).toFixed(2);
  },

  formatNumberToMln(num, count = 2) {
    const res = num / 1000000;
    let newCount = count;
    if (res < 1) {
      newCount = 2;
    }

    return (res).toFixed(newCount);
  },

  formatNumberToThousands(num, count = 3) {
    const res = num / 1000;
    let newCount = count;
    if (res < 1) {
      newCount = 3;
    }

    return (res).toFixed(newCount);
  },

  // eslint-disable-next-line consistent-return
  formatMoney(number = 0, count = 6) {
    if (!number) {
      return 0;
    }

    switch (count) {
      case 9:
        return accounting.formatMoney(number, accountingNineConfigComma);
      case 8:
        return accounting.formatMoney(number, accountingEightConfigComma);
      case 7:
        return accounting.formatMoney(number, accountingSevenConfigComma);
      case 6:
        return accounting.formatMoney(number, accountingConfig);
      case 4:
        return accounting.formatMoney(number, accountingFourConfig);
      case 3:
        return accounting.formatMoney(number, accountingThreeConfig);
      case 2:
        return accounting.formatMoney(number, accountingSecondConfig);
      case 1:
        return accounting.formatMoney(number, accountingFirstConfig);
      case 0:
        return accounting.formatMoney(number, accountingZeroConfig);
    }
  },

  // eslint-disable-next-line consistent-return
  formatMoneyComma(number = 0, count = 6) {
    if (!number) {
      return 0;
    }

    switch (count) {
      case 6:
        return accounting.formatMoney(number, accountingSixConfigComma);
      case 5:
        return accounting.formatMoney(number, accountingFiveConfigComma);
      case 4:
        return accounting.formatMoney(number, accountingFourConfigComma);
      case 2:
        return accounting.formatMoney(number, accountingSecondConfigComma);
      case 1:
        return accounting.formatMoney(number, accountingFirstConfigComma);
      case 0:
        return accounting.formatMoney(number, accountingZeroConfigComma);
    }
  },

  formatNumberToFixed(number, count = 2) {
    return (number).toFixed(count);
  },

  formatDate(date, pattern) {
    return dayjs(date).format(pattern);
  },

  fromE18: (value) => new BN(value.toString()).divRound(new BN(10).pow(new BN(18))).toString(),
  toE18: (value) => new BN(value).mul(new BN(10).pow(new BN(18))).toString(),

  toE6: (value) => value * 10 ** 6,
  fromE6: (value) => value / 10 ** 6,

};
