import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  works: any;

  constructor(
    private WorksService :WorksService
  ) { }

  ngOnInit(): void {
    this.works = this.WorksService.works;
  }


}
