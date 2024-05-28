import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educations = [
    { title: 'Bachelor of Degree in Software Engineering', school: 'Universidad Manuela Beltrán', year: '2012', img: '', url:'' },
    { title: 'Postgraduate Diploma in Business Intelligence', school: 'Pontificia Universidad Bolivariana', year: '2016',  img: '', url:'' },
    { title: 'Big Data Professional Certificate', school: 'Arcitura', year: '2018', img: '', url:'' },
    { title: 'Big Data Engineer Certificate', school: 'Arcitura', year: '2018', img: '', url:'' },
    { title: 'Scrum Developer Professional Certificate', school: 'CertiProf', year:'2020', img: '', url:'' },
    { title: 'Scrum Product Owner Professional Certificate', school: 'CertiProf', year:'2020', img: '', url:'' },
    { title: 'Scrum Master Professional Certificate', school: 'CertiProf', year:'2020', img: '', url:'' },
    { title: 'BigData', school: 'Universidad Nacional de Colombia', year:'2020', img: '', url:'' },
    { title: 'Introduction to Machine Learning with Python', school: 'Universidad Nacional de Colombia', year:'2020', img: '', url:'' },
    { title: 'Analysis and Visualization of Data with Python', school: 'Universidad Nacional de Colombia', year:'2020', img: '', url:'' },
    { title: 'Machine Learning and Data Science', school: 'Universidad Nacional de Colombia', year:'2020', img: '', url:'' },
    { title: 'Full-stack .NET Cloud Developer', school: 'Humber College', year:'2024', img: '', url:'' }
  ];

  constructor() { }
}
