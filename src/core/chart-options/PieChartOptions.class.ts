import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { PieChartConfiguration } from './PieChartConfiguration.class';

export class PieChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof PieChartConfiguration ? this.chartConf : new PieChartConfiguration();

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: conf.width,
      margin: conf.margin.getMarginOptions(),
      duration: conf.duration,
      showLabels: conf.showLabels,
      labelType: conf.labelType,
      labelThreshold: conf.labelThreshold,
      labelSunbeamLayout: conf.labelSunbeamLayout,
      showLegend: conf.showLeyend,
      legendPosition: conf.legendPosition,
      legend: conf.legend.getLegendOptions(),
      cornerRadius: conf.cornerRadius,
      donut: conf.donut,
      donutRatio: conf.donutRatio,
      pieLabelOutside: conf.pieLabelOutside,
      donutLabelOutside: conf.donutLabelOutside,
    };
    return chart;
  }

}