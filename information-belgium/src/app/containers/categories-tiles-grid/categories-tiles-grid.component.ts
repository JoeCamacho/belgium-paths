import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories-tiles-grid',
  templateUrl: './categories-tiles-grid.component.html',
  styleUrls: ['./categories-tiles-grid.component.scss']
})
export class CategoriesTilesGridComponent implements OnInit {

  public infoCategories = [
    {
      id: 'administration',
      category: 'ADMINISTRATION',
      image: 'administration.svg'
    },
    {
      id: 'education',
      category: 'EDUCATION',
      image: 'education.svg'
    },
    {
      id: 'healthcare',
      category: 'HEALTHCARE',
      image: 'healthcare.svg'
    },
    {
      id: 'housing',
      category: 'HOUSING',
      image: 'housing.svg'
    },
    {
      id: 'culture',
      category: 'CULTURE',
      image: 'culture.svg'
    },
    {
      id: 'politics',
      category: 'POLITICS',
      image: 'politics.svg'
    },
    {
      id: 'public-utilities',
      category: 'PUBLIC UTILITIES',
      image: 'public-utilities.svg'
    },
    {
      id: 'start-business',
      category: 'START A BUSINESS',
      image: 'start-business.svg'
    },
    {
      id: 'transportation',
      category: 'TRANSPORTATION',
      image: 'transportation.svg'
    },
  ];


  constructor() {
  }

  ngOnInit() {
    window.scroll(0, 0);
  }
}
