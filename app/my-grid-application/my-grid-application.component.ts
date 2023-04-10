// src/app/my-grid-application/my-grid-application.component.ts
import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
          enableSorting: true,
          enableFilter: true
        };
        this.gridOptions.columnDefs = [
            {
                headerName: "USN",
                field: "id",
                width: 100
            },
            {
                headerName: "Score",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 42001, value: 9},
            {id: 42002, value: 7},
            {id: 42003, value: 8}
        ]
    }
}