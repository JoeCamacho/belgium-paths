import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourcePortal} from '../../models';
import {Location} from '@angular/common';
import {ResourcesService,} from '../../services/resources.services';
import * as dataResources from '../../data/dataResources'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  // <!--TODO: PUT BACK TO GET DATA FROM BACKEND-->
  // public filteredDataResources: Observable<ResourcePortal[]>;
  public filteredDataResources: ResourcePortal[];
  public firstDataResource: ResourcePortal;

  public category: string;

  constructor(public route: ActivatedRoute,
              public location: Location,
              public resourcesService: ResourcesService) {
    this.category = this.route.snapshot.params.categoryId;
  }

  ngOnInit() {
    // TODO: PUT BACK TO GET DATA FROM BACKEND
    // this.filteredDataResources = this.resourcesService.getAll().pipe(
    //   map(resources => resources.filter(resource => resource.category === this.category))
    // );
    this.filteredDataResources = dataResources.dataResources.filter(resource => resource.category === this.route.snapshot.params.categoryId);
    window.scroll(0, 0);
  }

  back() {
    this.location.back();
  }
}
