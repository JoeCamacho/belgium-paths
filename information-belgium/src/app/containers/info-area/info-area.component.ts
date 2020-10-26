import {Component, OnInit} from '@angular/core';
import * as dataResources from '../../data/dataResources';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-info-area',
  templateUrl: './info-area.component.html',
  styleUrls: ['./info-area.component.scss']
})
export class InfoAreaComponent implements OnInit {

  // public dataResources = dataResources.dataResources;

  public filteredDataResources = [];

  constructor(public router: Router,
              public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.filteredDataResources = dataResources.dataResources.filter(resource => resource.section === this.route.snapshot.params.sectionId);
  }

}
