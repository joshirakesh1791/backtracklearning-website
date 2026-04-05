import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      initials: 'SP',
      name: 'Sneha Patel',
      role: 'QA Engineer at HCL',
      text: 'Best investment I made in my career. The live format means you can\'t fall behind, and the instructor\'s industry stories make every concept click.'
    },
    {
      initials: 'VR',
      name: 'Vikram Rao',
      role: 'Automation Tester at Capgemini',
      text: 'I tried 3 other courses before this one. None of them had real project work. BacktrackLearning is the only course that felt like actual job training.'
    },
    {
      initials: 'NJ',
      name: 'Neha Joshi',
      role: 'SDET at Tech Mahindra',
      text: 'The AI tools module alone is worth it. I now use AI to write test cases 5x faster. My team lead was shocked at my productivity jump after the course.'
    },
    {
      initials: 'RG',
      name: 'Rohit Gupta',
      role: 'Senior QA at Accenture',
      text: 'Clear explanations, real examples, zero fluff. The instructor genuinely cares if you understand. Doubt sessions after class are gold.'
    },
    {
      initials: 'MS',
      name: 'Meera Singh',
      role: 'Manual → Automation Tester',
      text: 'Switched from 5 years of manual testing in 3 months. The structured curriculum and placement guidance made the transition smooth and fast.'
    },
    {
      initials: 'DK',
      name: 'Dev Khanna',
      role: 'QA Lead at IBM',
      text: 'Even as someone with 3 years of experience, I learned things I didn\'t know. The AI testing integration is cutting-edge and extremely practical.'
    }
  ];
}
