import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from './../shared/shared.module';

import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
@NgModule({
    declarations: [DashboardComponent, ProgressComponent, Grafica1Component, PagesComponent, AccountSettingsComponent],
    imports: [CommonModule, SharedModule, RouterModule, FormsModule, ComponentsModule, ChartsModule],
    exports: [DashboardComponent, ProgressComponent, Grafica1Component, PagesComponent, AccountSettingsComponent],
})
export class PagesModule {}
