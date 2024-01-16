import { Routes } from '@angular/router';
import { CalcularComponent } from './components/calcular/calcular.component';

export const routes: Routes = [{path: "calcular", component: CalcularComponent},{path:"**", pathMatch: "full", redirectTo:"calcular"},];
