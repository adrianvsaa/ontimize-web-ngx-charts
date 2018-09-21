import { ChartConfiguration } from '../ChartConfiguration.class';
import { Margin } from '../Margin.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';

export class PieChartConfiguration extends ChartConfiguration {
  public showLabels: boolean = true;
  public showLeyend: boolean = true;
  public legendPosition: string = 'top';
  public duration: number = 500;
  public labelType: string = 'key';
  public labelThreshold: number = 0.01;
  public labelSunbeamLayout: boolean = true;
  public cornerRadius: number = 0;
  margin: Margin;
  readonly donut: boolean = false;
  readonly donutRatio: number = 0;
  pieLabelOutside: boolean = true;
  donutLabelOutside: boolean = false;
  legend: ChartLegendConfiguration;

  constructor() {
    super();
    this.margin = new Margin();
    this.legend = new ChartLegendConfiguration();
  }
}
