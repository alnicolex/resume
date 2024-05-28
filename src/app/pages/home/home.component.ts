import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { BasicInformationService } from '../../services/basic-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private BasicInformationService : BasicInformationService,
    private SkillsService : SkillsService
  ) { }

  basicInfo: any;

  skillsFE: any;
  skillsBE: any;
  skillsDB: any;
  skillsAN: any;
  skillsTE: any;



  ngOnInit(): void {
    this.basicInfo = this.BasicInformationService.basicInformation;

    this.skillsFE = this.SkillsService.skills.filter(t =>t.type === 'Frontend');
    this.skillsBE = this.SkillsService.skills.filter(t =>t.type === 'Backend');
    this.skillsDB = this.SkillsService.skills.filter(t =>t.type === 'Database');
    this.skillsAN = this.SkillsService.skills.filter(t =>t.type === 'Analysis');
    this.skillsTE = this.SkillsService.skills.filter(t =>t.type === 'Test');
  }

}
