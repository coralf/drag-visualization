import TextImg from '../../assets/img/text-im.png';
import BoxImg from '../../assets/img/box-im.png'
import FlexboxImg from '../../assets/img/flexbox-im.png'
import RowImg from '../../assets/img/row-im.png';
import GridImg from '../../assets/img/grid-im.png';
import PieChartImg from '../../assets/img/pieChart-im.png';
import BarChartImg from '../../assets/img/barChart-im.png';


export interface PlaneItem {
  type: string;
  text: string;
  img?: any;
}

export const AllTypeNodes: PlaneItem[] = [
  {
    type: 'text',
    text: 'text',
    img: TextImg
  },
  {
    type: 'box',
    text: 'Box',
    img: BoxImg
  },
  {
    type: 'flexbox',
    text: 'Flexbox',
    img: FlexboxImg
  },
  {
    type: 'row',
    text: 'Row',
    img: RowImg
  },
  {
    type: 'grid',
    text: 'Grid',
    img: GridImg
  },
  {
    type: 'pieChart',
    text: 'Pie Chart',
    img: PieChartImg
  },
  {
    type: 'barChart',
    text: 'Bar Chart',
    img: BarChartImg
  }
]