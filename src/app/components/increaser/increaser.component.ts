import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-increaser',
    templateUrl: './increaser.component.html',
    styleUrls: ['./increaser.component.css'],
})
export class IncreaserComponent implements OnInit {
    ngOnInit() {
        this.btnClass = `btn ${this.btnClass}`;
    }
    @Input() progress: number = 50;
    @Input() btnClass: string = 'btn-primary';

    @Output() triggerValue: EventEmitter<number> = new EventEmitter();

    /* get getPercentage() {
        return `${this.progress}%`;
    } */
    changeValue(value: number) {
        if (this.progress >= 100 && value >= 0) {
            this.triggerValue.emit(100);
        }
        if (this.progress <= 0 && value < 0) {
            this.triggerValue.emit(0);
        }

        this.progress = this.progress + value;
        this.triggerValue.emit(this.progress);
    }

    typeNumber(newValue: number) {
        if (newValue >= 100) {
            newValue = 100;
        } else if (newValue <= 0) {
            newValue = 0;
        } else {
            newValue = newValue;
        }
        this.triggerValue.emit(newValue);
    }
}
