import { mosaic, palettes } from 'anychart';
// eslint-disable-next-line import/named
import { tokenColors } from '@/components/tools/marimeko/tokenColors';
import utils from '@/utils/utils';

// eslint-disable-next-line import/prefer-default-export
export const getChartSettings = (
  {
    mekkaData = [],
    maxTvl = null,
    blocksPadding = 1,
    hasBlockLabel = true,
    legendPosition = 'bottom',
    legendAlignment = 'left',
    legendMarginTop = 20,
  },
) => {
  const names = [];
  const valuesData = mekkaData[0].values;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < valuesData.length; i++) {
    const valueData = valuesData[i];
    names.push(valueData.name);
    console.log('Value Name: ', valueData.name);
  }

  const data = {
    header: ['Name', ...names],
    rows: mekkaData.map((item) => {
      const values = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < item.values.length; i++) {
        values.push(item.values[i].value);
      }

      return [item.chainName, ...values];
    }),
    utils,
  };

  const chart = mosaic();

  const palette = palettes.distinctColors();

  palette.items([
    tokenColors.ETH,
    tokenColors.USDT,
    tokenColors.DAI,
    tokenColors.USD,
  ]);

  chart.palette(palette);
  chart.legend().enabled(true).position(legendPosition);
  chart.legend().enabled(true).align(legendAlignment);
  chart.legend().enabled(true).margin(legendMarginTop);

  chart.data(data);
  chart.interactivity().selectionMode(false);

  chart.pointsPadding(blocksPadding);

  chart.xAxis().labels().fontColor('#29323E');
  chart.yAxis().labels().enabled(false);

  if (hasBlockLabel) {
    chart.labels()
      .format((ctx) => {
        if (ctx.value < 500000) {
          return '';
        }

        if (ctx.seriesName === 'USD+') {
          // eslint-disable-next-line radix
          if (utils.formatNumberToPercent(parseInt(ctx.value), maxTvl) < 2) {
            return '';
          }

          // eslint-disable-next-line radix
          if (utils.formatNumberToPercent(parseInt(ctx.value), maxTvl) < 5) {
            return `$${utils.formatNumberToMln(ctx.value)}m`;
          }
        }

        return `$${utils.formatNumberToMln(ctx.value)}m ${ctx.seriesName}`;
      })
      .fontColor('#FFFFFF')
      .fontSize(12)
      .fontFamily('Red Hat Display');
  } else {
    chart.labels()
      .format((ctx) => {
        if (ctx.value < 500000) {
          return '';
        }

        return `$${utils.formatNumberToMln(ctx.value)}m`;
      })
      .fontColor('#FFFFFF')
      .fontSize(10)
      .fontFamily('Red Hat Display');
  }

  chart.listen('pointClick', (e) => {
    console.log(e.iterator);

    // for info
    // console.log(e.iterator.Ra.Br)
    const row = e.iterator.getIndex();
    const { chainName } = mekkaData[row];

    const type = e.iterator.Ra.Br;
    if (type === 'USD+') {
      window.open(`https://app.overnight.fi/collateral?tabName=${chainName.toLowerCase()}`, '_self');
      return;
    }

    if (type === 'USDT+') {
      window.open(`https://app.overnight.fi/collateral/usdt?tabName=${chainName.toLowerCase()}`, '_self');
      return;
    }

    if (type === 'DAI+') {
      window.open(`https://app.overnight.fi/collateral/dai?tabName=${chainName.toLowerCase()}`, '_self');
      return;
    }

    if (type === 'ETH+') {
      window.open(`https://app.overnight.fi/collateral/eth?tabName=${chainName.toLowerCase()}`, '_self');
      return;
    }

    console.error('Type chart not found for open link, type:', type);
  });

  chart.tooltip()
    .separator(false)
    .format((ctx) => `$${utils.formatNumberToMln(ctx.value)}m${maxTvl ? ` ~${utils.formatNumberToPercent(parseInt(ctx.value), maxTvl)}%` : ''}`)
    .titleFormat('{%seriesName} on {%x}')
    .background('#ffffff')
    .fontColor('#29323E')
    .fontFamily('Roboto')
    .fontSize(14)
    .title()
    .fontColor('#29323E')
    .fontFamily('Red Hat Display');

  return chart;
};
