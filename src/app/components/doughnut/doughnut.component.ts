import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
    selector: 'app-doughnut',
    templateUrl: './doughnut.component.html',
    styleUrls: [],
})
export class DoughnutComponent implements OnInit {
    @Input() title: string = 'Untitled';
    @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
    @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];
    public colors: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }];
    constructor() {}

    ngOnInit(): void {}
}
