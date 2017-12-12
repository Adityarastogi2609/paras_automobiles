import { NgModule } from '@angular/core';
import { MatDialogModule,MatCheckboxModule,MatSnackBarModule,MatInputModule, MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatIconModule,MatButtonToggleModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [MatDialogModule,MatCheckboxModule,CdkTableModule,MatSnackBarModule,MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatIconModule,MatButtonToggleModule],
    exports: [MatDialogModule,MatCheckboxModule,CdkTableModule,MatSnackBarModule,MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatTableModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatIconModule,MatButtonToggleModule]
})
export class MaterialModule { }