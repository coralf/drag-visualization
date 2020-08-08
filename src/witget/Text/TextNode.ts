import { BaseEnode } from "../../nodes/BaseEnode";
import { Style } from "../../nodes";
import { EnodeType } from "../../nodes/ENodeConfig";



export default class TextNode extends BaseEnode {
  id: string;
  type: string;
  width: number;
  height: number;
  children: BaseEnode[];
  style: Style;
  dragable: boolean;
  value: string;
  constructor() {
    super();
    this.type = EnodeType.Text;
    this.value = "text";
  }
}

