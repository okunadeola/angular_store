import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-headers',
  templateUrl: `./product-headers.component.html`,
  styles: [
  ]
})
export class ProductHeadersComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() showCategory = new EventEmitter<string>();

  itemsShowCount = 12;
  sort = 'desc';

  constructor() {}

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onShowCategory(category: string): void {

    this.showCategory.next(category);
  }

  onItemsUpdated(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string): void {
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }
}
