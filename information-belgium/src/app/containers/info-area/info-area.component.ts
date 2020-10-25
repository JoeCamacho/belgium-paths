import {Component, OnInit} from '@angular/core';
import * as dataResources from '../../data/dataResources';

@Component({
  selector: 'app-info-area',
  templateUrl: './info-area.component.html',
  styleUrls: ['./info-area.component.scss']
})
export class InfoAreaComponent implements OnInit {

  public dataResources = dataResources.dataResources;
  panelOpenState = false;

  constructor() {
  }

  ngOnInit() {

  }

}
