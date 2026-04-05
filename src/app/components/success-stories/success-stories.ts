import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  standalone: false,
  templateUrl: './success-stories.html',
  styleUrl: './success-stories.scss',
})
export class SuccessStories {
  stories = [
    {
      initials: 'RS',
      name: 'Rahul Sharma',
      before: 'Manual Tester',
      after: 'Automation Engineer',
      hike: '60% Salary Hike',
      quote: 'I was stuck in manual testing for 4 years. After this course, I cracked 3 automation roles in 2 months. The live projects made all the difference.',
      company: 'TCS'
    },
    {
      initials: 'PM',
      name: 'Priya Mehta',
      before: 'IT Support',
      after: 'QA Automation Engineer',
      hike: 'New Career',
      quote: 'Coming from a non-testing background felt scary. But the instructor made AI testing so accessible. I landed my first QA role within 90 days.',
      company: 'Infosys'
    },
    {
      initials: 'AK',
      name: 'Amit Kumar',
      before: 'Junior Tester',
      after: 'Senior Automation Lead',
      hike: '80% Salary Hike',
      quote: 'The AI tools integration alone is worth 10x the course fee. I now lead an automation team of 5. This course changed my career trajectory completely.',
      company: 'Wipro'
    }
  ];
}
