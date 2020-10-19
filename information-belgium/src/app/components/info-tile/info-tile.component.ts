import {Component, Input, OnInit} from '@angular/core';

export interface InfoTopic {
  id: string;
  image: string;
}

@Component({
  selector: 'app-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: ['./info-tile.component.scss']
})
export class InfoTileComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {
  }

}
