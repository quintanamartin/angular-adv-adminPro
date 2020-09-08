import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
    firstProgress: number = 25;
    secondProgress: number = 35;

    getFirstProgress() {
        return `${this.firstProgress}%`;
    }

    getSecondProgress() {
        return `${this.secondProgress}%`;
    }
}
