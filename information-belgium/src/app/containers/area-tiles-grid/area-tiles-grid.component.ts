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
      image: 'documents.svg'
    },
    {
      id: 'healthcare',
      sectionName: 'Healthcare',
      image: 'healthcare.svg'
    },
    {
      id: 'education',
      sectionName: 'Education',
      image: 'education.svg'
    },
    {
      id: 'transportation',
      sectionName: 'Transportation',
      image: 'transportation.svg'
    },
    {
      id: 'politics',
      sectionName: 'Politics',
      image: 'politics.svg'
    },
    {
      id: 'museum',
      sectionName: 'Museum',
      image: 'museum.svg'
    },
    {
      id: 'public-utilities',
      sectionName: 'Public utilities',
      image: 'public-utilities.svg'
    },
    {
      id: 'start-business',
      sectionName: 'Start a business',
      image: 'start-business.svg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
