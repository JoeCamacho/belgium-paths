import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tiles-grid',
  templateUrl: './area-tiles-grid.component.html',
  styleUrls: ['./area-tiles-grid.component.scss']
})
export class AreaTilesGridComponent implements OnInit {

  public infoSections = [
    {
      id: 'documents',
      sectionName: 'Documents',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'healthcare',
      sectionName: 'Healthcare',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'education',
      sectionName: 'Education',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'transportation',
      sectionName: 'Transportation',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'politics',
      sectionName: 'Politics',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'museum',
      sectionName: 'Museum',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'public-utilities',
      sectionName: 'Public utilities',
      image: 'money-bag-hand-drawn-variant.png'
    },
    {
      id: 'start-business',
      sectionName: 'Start a business',
      image: 'money-bag-hand-drawn-variant.png'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
