/* import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 500px;
      border: 4px solid red;
    }
  `],
  template: `
    <split gutterSize="18" direction="horizontal" [useTransition]="true" (dragEnd)="dragEnd($event)" (gutterClick)="gutterClick($event)">
      <split-area *ngFor="let a of areas" [size]="a.size" [order]="a.order">{{ a.content }}</split-area>
    </split>
  `,
})
export class AppComponent {
  areas = [
    { size: 25, order: 1, content: 'AAA' },
    { size: 50, order: 2, content: 'BBB' },
    { size: 25, order: 3, content: 'CCC' },
  ];

  dragEnd(e) {
    console.log('dragEnd', e);
  }

  gutterClick(e) {
    console.log('gutterClick', e);
    const numGutter = <number>e.gutterNum;

    if (numGutter === 1) {
      if (this.areas[0].size === 0) {
        if (this.areas[1].size >= 25) {
          this.areas[0].size = 25;
          this.areas[1].size -= 25;
        }
        else {
          this.areas[0].size = 25;
          this.areas[1].size = 50;
          this.areas[2].size = 25;
        }
      }
      else {
        this.areas[1].size += this.areas[0].size;
        this.areas[0].size = 0;
      }
    }
    else if (numGutter === 2) {
      if (this.areas[2].size === 0) {
        if (this.areas[1].size >= 25) {
          this.areas[2].size = 25;
          this.areas[1].size -= 25;
        }
        else {
          this.areas[0].size = 25;
          this.areas[1].size = 50;
          this.areas[2].size = 25;
        }
      }
      else {
        this.areas[1].size += this.areas[2].size;
        this.areas[2].size = 0;
      }
    }
  }
} */

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          backgroundColor: 'rgb(255, 99, 132)',
        },{
          label: 'Bar Dataset 2',
          data: [15, 25, 40, 67],
          backgroundColor: 'rgb(255, 159, 64)',
        },{
          label: 'Bar Dataset 3',
          data: [25, 5, 20, 27],
          backgroundColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Line Dataset',
          data: [50, 50, 50, 50],

          // Changes this dataset to become a line
          type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
        },
        maintainAspectRatio: false
    }
    });
  }
 
  areas = [
    {size: 25, order: 1, content: 'fg fdkjuh dfskhf dkujv fd vifdk hvdkuh fg'},
    {size: 75, order: 2, content: 'sd h vdshhf deuyf gduyeg hudeg hudfg  fd vifdk hvdkuh fg'},
    
  ]

  gutterClick(e: {gutterNum: number, sizes: Array<number>}) {
    if(e.gutterNum === 1) {
        if(this.areas[0].size > 0) {
          this.areas[0].size = 0;
          this.areas[1].size = 100;
        }
        else {
          this.areas[0].size = 25;
          this.areas[1].size = 75
        }
    }
    else if(e.gutterNum === 2) {
        if(this.areas[2].size > 0) {
            this.areas[1].size += this.areas[2].size;
            this.areas[2].size = 0;
        }
        else if(this.areas[1].size > 25) {
            this.areas[1].size -= 25;
            this.areas[2].size = 25;
        }
        else {
            this.areas[0].size = 25;
            this.areas[1].size = 50;
            this.areas[2].size = 25;
        }
    }
}
}
