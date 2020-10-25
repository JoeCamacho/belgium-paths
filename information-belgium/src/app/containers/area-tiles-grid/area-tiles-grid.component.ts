import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tiles-grid',
  templateUrl: './area-tiles-grid.component.html',
  styleUrls: ['./area-tiles-grid.component.scss']
})
export class AreaTilesGridComponent implements OnInit {

  public infoSections = [
    {
      id: 'Education',
      image: 'education.jpg'
    },
    {
      id: 'Healthcare',
      image: 'healthcare.jpg'
    },
    {
      id: 'History',
      image: 'history.jpg'
    },
    {
      id: 'Housing',
      image: 'housing.jpg'
    },
    {
      id: 'Politics',
      image: 'politics.jpg'
    },
    {
      id: 'Recycling',
      image: 'recycling.jpg'
    },
    {
      id: 'Taxes',
      image: 'taxes.jpg'
    },
    {
      id: 'Traditions',
      image: 'traditions.jpg'
    },
    {
      id: 'Values',
      image: 'values.jpg'
    },
    {
      id: 'Work',
      image: 'work.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
