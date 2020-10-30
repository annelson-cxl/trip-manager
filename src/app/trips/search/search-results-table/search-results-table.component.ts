import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results-table',
  templateUrl: './search-results-table.component.html',
  styleUrls: ['./search-results-table.component.scss']
})
export class SearchResultsTableComponent implements OnInit {

  private tableData: Array<any>;
  headers: Array<string>;

  @Output()
  notify: EventEmitter<any>;

  constructor() {
    this.tableData = new Array<any>();
    this.headers = new Array<string>();
    this.notify = new EventEmitter<any>();
  }

  ngOnInit():void { }

  @Input()
  set TableData(val: Array<any>) {
    if (val.length > 0) {
      this.tableData = val;
      // generate headers from the first record of the array
      for (const p of Object.keys(this.tableData[0])) {
        this.headers.push(p);
      }
    } else {
      this.tableData = new Array<any>();
    }
  }
  get TableData(): Array<any> {
    return this.tableData;
  }

  rowClick(rec: any): void {
    // the emit will pass the data to parent
    // parent must subscribe to the event using
    // event binding and  read data
    this.notify.emit(rec);
  }

}
