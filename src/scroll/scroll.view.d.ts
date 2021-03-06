import { View } from '../view/view';
import { SingleOrMultipleMode } from '../row/row.model';
import { Model } from '../infrastructure/model';
import { Table } from '../dom/table';
import { GridService } from '../services/grid';

/**
 * > Under Construction.
 */
export declare class ScrollView extends View {
    constructor(model: Model, table: Table, vscroll: any);

    invalidate(): void;

    readonly mode: SingleOrMultipleMode;
}
