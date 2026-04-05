import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: false,
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  steps = [
    {
      icon: 'app_registration',
      title: 'Enroll & Join the Batch',
      desc: 'Reserve your seat in the next live batch. Seats are limited to keep classes small and focused.'
    },
    {
      icon: 'live_tv',
      title: 'Attend Live Sessions',
      desc: 'Join interactive classes from anywhere. Ask questions in real time and get instant feedback from the instructor.'
    },
    {
      icon: 'folder_special',
      title: 'Work on Real Projects',
      desc: 'Apply what you learn on actual industry projects. Build a portfolio that impresses recruiters.'
    },
    {
      icon: 'work',
      title: 'Get Job Ready',
      desc: 'Walk out with interview skills, a strong resume, and the confidence to crack automation testing roles.'
    }
  ];
}
