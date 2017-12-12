import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p-datatable',
  templateUrl: './p-datatable.component.html',
  styleUrls: ['./p-datatable.component.css']
})
export class PDatatableComponent {

  @Input() GridData = [];
  @Input() columnDefs:any;

}
