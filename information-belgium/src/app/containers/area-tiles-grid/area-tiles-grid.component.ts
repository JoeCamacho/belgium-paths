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
      image: 'documents.jpg'
    },
    {
      id: 'healthcare',
      sectionName: 'Healthcare',
      image: 'healthcare.jpg'
    },
    {
      id: 'education',
      sectionName: 'Education',
      image: 'education.jpg'
    },
    {
      id: 'transportation',
      sectionName: 'Transportation',
      image: 'transportation.jpeg'
    },
    {
      id: 'politics',
      sectionName: 'Politics',
      image: 'politics.jpg'
    },
    {
      id: 'museum',
      sectionName: 'Museum',
      image: 'museum.jpg'
    },
    {
      id: 'public-utilities',
      sectionName: 'Public utilities',
      image: 'public-utilities.jpg'
    },
    {
      id: 'start-business',
      sectionName: 'Start a business',
      image: 'start-business.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
