import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor',
  standalone: false,
  templateUrl: './instructor.html',
  styleUrl: './instructor.scss',
})
export class Instructor {
  highlights = [
    { icon: 'verified', text: '12+ years of hands-on QA & automation experience' },
    { icon: 'business', text: 'Worked with enterprise clients across multiple domains' },
    { icon: 'emoji_events', text: 'Trained 500+ professionals in automation testing' },
    { icon: 'live_tv', text: 'Every class is live, interactive & doubt-friendly' },
    { icon: 'build', text: 'Real project-based curriculum — no theory fluff' }
  ];
}
