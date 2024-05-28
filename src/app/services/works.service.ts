import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  works = [
    { idWork: 1, title: 'Technician', company: 'OHNz Technologies', startDate: '2023-03', endDate: '2023-10',
    task: [
      {value: 'Efficiently repaired and tested computers, printers, scanners, UPSs, tape drives, hard drives, logical boards, network switches, and other computer peripherals.'},
      {value: 'Adjusted, aligned, replaced, or repaired electronic equipment and components using equipment manuals, schematics, soldering, and other tools.'}
    ]},
    { idWork: 2, title: 'Software Developer', company: 'MinTic', startDate: '2021-03', endDate: '2021-10',
    task: [
      {value: 'Developed a social network with the following architecture:'},
      {value: 'Frontend: developed web components with JavaScript and Vue.js framework.'},
      {value: 'Backend: developed microservices in Python with Django framework and Java with Spring Boot framework connected to PostgreSQL and MongoDB databases'},
      {value: 'Communication between Front and Back through the APIGraphQL exposed by Apollo Server.' }]
    },
    { idWork: 3, title: 'Senior Business Analyst', company: 'Heinsohn', startDate: '2015-05', endDate: '2022-05',
    task: [
      {value: 'Led the scrum team and follow up on work plans and task assignments.'},
      {value: 'Implemented automated tests using the rigorous BDD and TDD methodologies, leveraging Java, Selenium WebDriver, Gherkin, and Cucumber.'},
      {value: 'Constructed essential database elements such as tables, stored procedures, functions, Views, and triggers in Oracle.'}
    ]},
    { idWork: 4, title: 'Senior Software Developer', company: 'Heinsohn Business Technology', startDate: '2011-01', endDate: '2015-05',
    task: [
      {value: 'Ensured product integrity through validation and prioritization of reported issues. Supported training for developers, testers, and customers.'},
      {value: 'Debugged and modified software components.'},
      {value: 'Developed JUnit and automated tests using TDD methodology in Selenium and Java.'}
    ]},
    { idWork: 5, title: 'Business Analyst', company: 'Sonda', startDate: '2009-01', endDate: '2010-12',
    task: [
      {value: 'Coordinated work teams to implement new software solutions and coexist between AS400 and ASP.NET platform applications.'},
      {value: 'Software development for data migration in C++ and Oracle stored procedures'},
      {value: 'Validated the quality and consistency of the information through the debugging script'}
    ]},
    { idWork: 6, title: 'IT Support', company: 'Scott Mission', startDate: '2023-01', endDate: '2023-04',
    task: [
      {value: 'Installed and configured desktops and laptops, accounts assigning security level.'},
      {value: 'Installed and uninstalled software, hardware, and peripherals.'}
    ]}
  ]

  constructor() { }
}
