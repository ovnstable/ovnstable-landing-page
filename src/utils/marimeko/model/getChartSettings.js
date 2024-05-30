import { mekko, palettes } from 'anychart';
// eslint-disable-next-line import/named
import utils from '@/utils';
import tokenColors from '@/utils/marimeko/tokenColors';

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
  const { originalData, scaledData } = mekkaData;

  const names = Object.keys(originalData[Object.keys(originalData)[0]]);

  console.log(originalData);

  const data = {
    header: ['Name', ...names],
    rows: scaledData,
    utils,
  };

  const chart = mekko();

  const palette = palettes.distinctColors();

  palette.items([
    tokenColors.ETH,
    tokenColors.USDT,
    tokenColors.DAI,
    tokenColors.USD,
  ]);

  chart.palette(palette);
  const legend = chart.legend();
  legend.enabled(true);
  legend.position(legendPosition);
  legend.align(legendAlignment);
  legend.margin(legendMarginTop);

  chart.data(data);

  chart.interactivity().selectionMode(false);

  chart.pointsPadding(blocksPadding);

  const xLabels = chart.xAxis().labels();
  xLabels.fontColor('#29323E');
  xLabels.rotation(-45);

  chart.yAxis().labels().enabled(false);

  const getOriginalValue = (ctx) => originalData[ctx.x][ctx.seriesName];
  const formatTooltip = (ctx) => {
    const val = getOriginalValue(ctx);
    return `$${utils.formatNumberToMln(val)}m${maxTvl ? ` ~${utils.formatNumberToPercent(parseInt(val, 10), maxTvl)}%` : ''}`;
  };

  if (hasBlockLabel) {
    chart.labels()
      .format((ctx) => {
        const origVal = getOriginalValue(ctx);
        // if (origVal < 500000) {
        //   return '';
        // }

        if (ctx.seriesName === 'USD+') {
          // // eslint-disable-next-line radix
          // if (utils.formatNumberToPercent(parseInt(origVal), maxTvl) < 2) {
          //   return '';
          // }

          // eslint-disable-next-line radix
          if (utils.formatNumberToPercent(parseInt(origVal), maxTvl) < 5) {
            return `$${utils.formatNumberToMln(origVal)}m`;
          }
        }

        return `$${utils.formatNumberToMln(origVal)}m ${ctx.seriesName}`;
      })
      .fontColor('#FFFFFF')
      .fontSize(12)
      .fontFamily('Red Hat Display');
  } else {
    chart.labels()
      .format((ctx) => {
        const origVal = getOriginalValue(ctx);
        if (origVal < 500000) {
          return '';
        }

        return `$${utils.formatNumberToMln(origVal)}m`;
      })
      .fontColor('#FFFFFF')
      .fontSize(10)
      .fontFamily('Red Hat Display');
  }

  // chart.listen('pointClick', (e) => {
  //   // for info
  //   // console.log(e.iterator.Ra.Br)
  //   const { chainName } = e.target.Cr;

  //   const type = e.iterator.Ra.Br;

  //   if (type === 'USD+') {
  //     window.open(`https://app.overnight.fi/collateral?tabName=${chainName.toLowerCase()}`, '_self');
  //     return;
  //   }

  //   if (type === 'USDT+') {
  //     window.open(`https://app.overnight.fi/collateral/usdt?tabName=${chainName.toLowerCase()}`, '_self');
  //     return;
  //   }

  //   if (type === 'DAI+') {
  //     window.open(`https://app.overnight.fi/collateral/dai?tabName=${chainName.toLowerCase()}`, '_self');
  //     return;
  //   }

  //   if (type === 'ETH+') {
  //     window.open(`https://app.overnight.fi/collateral/eth?tabName=${chainName.toLowerCase()}`, '_self');
  //     return;
  //   }

  //   console.error('Type chart not found for open link, type:', type);
  // });

  chart.tooltip()
    .separator(false)
    // eslint-disable-next-line radix
    .format((ctx) => formatTooltip(ctx))
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
