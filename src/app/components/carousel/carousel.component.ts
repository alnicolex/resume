import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  educations: any;

  constructor(
    private EducationService : EducationService
  ) { }

  ngOnInit(): void {
    this.educations = this.EducationService.educations;
  }

  numItems(arr: any[], numSize: number): any[] {
    const num = [];
    for (let i = 0; i < arr.length; i += numSize) {
      num.push(arr.slice(i, i + numSize));
    }
    return num;
  }

}
