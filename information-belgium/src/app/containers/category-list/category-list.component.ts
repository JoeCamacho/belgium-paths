import {Component, OnInit} from '@angular/core';
import * as dataResources from '../../data/dataResources';
import {ActivatedRoute} from '@angular/router';
import {ResourcePortal} from '../../models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public filteredDataResources: ResourcePortal[];
  public firstDataResource: ResourcePortal;

  constructor(public route: ActivatedRoute,
              public location: Location) {
  }

  ngOnInit() {
    this.filteredDataResources = dataResources.dataResources.filter(resource => resource.category === this.route.snapshot.params.categoryId);
    window.scroll(0, 0);
    this.firstDataResource = this.filteredDataResources[0];
  }

  back() {
    this.location.back();
  }

}
