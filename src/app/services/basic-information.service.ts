import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInformationService {

  basicInformation = [{
    firstName: 'Alexander',
    lastName: 'Oyuela Lozano',
    birthDate: '1985-12-23',
    email: 'alnicolex@gmail',
    about: 'I have a strong passion for technology and enjoy staying updated with the latest advancements in the field. In my free time, I love playing soccer and going for walks, which helps me stay active and fosters a sense of teamwork. Additionally, spending quality time with my family is very important to me, providing a perfect balance to my professional and personal life.'
  }]

  constructor() { }
}
