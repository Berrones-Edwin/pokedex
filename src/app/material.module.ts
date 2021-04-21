import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

const COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [],
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class MaterialModule {}
