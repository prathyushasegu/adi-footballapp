import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-link-render',
  templateUrl: './link-render.component.html',
  styleUrls: ['./link-render.component.css']
})
export class LinkRenderComponent {
  public cellValue!: any;
  refresh(params: ICellRendererParams) {

  }

  agInit(params: ICellRendererParams) {
    this.cellValue = params.data; 
  }
}
