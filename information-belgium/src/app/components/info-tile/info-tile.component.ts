import {Component, OnInit} from '@angular/core';

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

  public infoTopics = [
    {
      id: '1',
      image: 'src/assets/img/tiles/education.jpeg'
    },
    {
      id: '2',
      image: 'src/assets/img/tiles/healthcare.jpg'
    },
    {
      id: '3',
      image: 'src/assets/img/tiles/history.jpg'
    },
    {
      id: '4',
      image: 'src/assets/img/tiles/housing.jpg'
    },
    {
      id: '5',
      image: 'src/assets/img/tiles/politics.jpg'
    },
    {
      id: '6',
      image: 'src/assets/img/tiles/recycling.jpg'
    },
    {
      id: '7',
      image: 'src/assets/img/tiles/taxes.jpg'
    },
    {
      id: '8',
      image: 'src/assets/img/tiles/traditions.jpg'
    },
    {
      id: '9',
      image: 'src/assets/img/tiles/values.jpg'
    },
    {
      id: '10',
      image: 'src/assets/img/tiles/work.jpg'
    },
    {
      id: '1',
      image: 'src/assets/img/tiles/'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
