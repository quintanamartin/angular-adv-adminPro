import { DoughnutComponent } from './doughnut/doughnut.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [IncreaserComponent, DoughnutComponent],
    exports: [IncreaserComponent, DoughnutComponent],
    imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
