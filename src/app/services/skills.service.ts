import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [
    { type: 'Frontend', technology: 'HTML', value: ''},
    { type: 'Frontend', technology: 'CSS', value: ''},
    { type: 'Frontend', technology: 'JavaScript', value: ''},
    { type: 'Frontend', technology: 'Angular', value: ''},
    { type: 'Backend', technology: 'C#', value: ''},
    { type: 'Backend', technology: '.Net', value: ''},
    { type: 'Backend', technology: 'Java', value: ''},
    { type: 'Backend', technology: 'Python', value: ''},
    { type: 'Database', technology: 'SQL Server', value: ''},
    { type: 'Database', technology: 'Oracle', value: ''},
    { type: 'Database', technology: 'PostgreSQL', value: ''},
    { type: 'Database', technology: 'MongoDB', value: ''},
    { type: 'Analysis', technology: 'Python', value: ''},
    { type: 'Analysis', technology: 'PowerBI', value: ''},
    { type: 'Analysis', technology: 'Quick View', value: ''},
    { type: 'Analysis', technology: 'Excel', value: ''},
    { type: 'Test', technology: 'JUnit', value: ''},
    { type: 'Test', technology: 'Selenium', value: ''},
    { type: 'Test', technology: 'Cucumber', value: ''},
    { type: 'Test', technology: 'Gherkin'}
  ]

  constructor() { }
}
