import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-tiles-grid',
  templateUrl: './sectors-tiles-grid.component.html',
  styleUrls: ['./sectors-tiles-grid.component.scss']
})
export class SectorsTilesGridComponent implements OnInit {

  public infoSections = [
    {
      id: 'documents',
      sectionName: 'DOCUMENTS',
      image: 'documents.svg'
    },
    {
      id: 'healthcare',
      sectionName: 'HEALTHCARE',
      image: 'healthcare.svg'
    },
    {
      id: 'education',
      sectionName: 'EDUCATION',
      image: 'education.svg'
    },
    {
      id: 'transportation',
      sectionName: 'TRANSPORTATION',
      image: 'transportation.svg'
    },
    {
      id: 'politics',
      sectionName: 'POLITICS',
      image: 'politics.svg'
    },
    {
      id: 'museum',
      sectionName: 'MUSEUM',
      image: 'museum.svg'
    },
    {
      id: 'public-utilities',
      sectionName: 'PUBLIC UTILITIES',
      image: 'public-utilities.svg'
    },
    {
      id: 'start-business',
      sectionName: 'START A BUSINESS',
      image: 'start-business.svg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
