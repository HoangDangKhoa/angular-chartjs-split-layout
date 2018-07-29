import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
    type: any;
    options: any;
    data: any;
    isDataAvailable: boolean;

    ngOnInit(): void {
        this.type = sessionStorage.getItem('chart_type');
        this.options = sessionStorage.getItem('chart_options');
        this.data = sessionStorage.getItem('chart_data');
        if (this.type != null && this.options != null && this.data != null) {
            this.isDataAvailable = true;
        } else {
            this.isDataAvailable = false;
        }
    }

}