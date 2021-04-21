import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTypePipe } from './pipes/get-type.pipe';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '../material.module';
import { SetColorDirective } from './directives/set-color.directive';

@NgModule({
  declarations: [
    GetTypePipe,
    ProgressBarComponent,
    LoadingComponent,
    SetColorDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    GetTypePipe,
    ProgressBarComponent,
    LoadingComponent,
    SetColorDirective,
  ],
})
export class SharedModule {}
