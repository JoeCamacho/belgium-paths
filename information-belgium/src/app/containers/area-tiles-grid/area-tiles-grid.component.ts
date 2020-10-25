import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tiles-grid',
  templateUrl: './area-tiles-grid.component.html',
  styleUrls: ['./area-tiles-grid.component.scss']
})
export class AreaTilesGridComponent implements OnInit {

  public infoSections = [
    {
      id: 'education',
      image: 'education.jpg'
    },
    {
      id: 'healthcare',
      image: 'healthcare.jpg'
    },
    {
      id: 'history',
      image: 'history.jpg'
    },
    {
      id: 'housing',
      image: 'housing.jpg'
    },
    {
      id: 'politics',
      image: 'politics.jpg'
    },
    {
      id: 'recycling',
      image: 'recycling.jpg'
    },
    {
      id: 'taxes',
      image: 'taxes.jpg'
    },
    {
      id: 'traditions',
      image: 'traditions.jpg'
    },
    {
      id: 'values',
      image: 'values.jpg'
    },
    {
      id: 'work',
      image: 'work.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
