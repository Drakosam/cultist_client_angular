import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cult-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit(): void {
  }

}
