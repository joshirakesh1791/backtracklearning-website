import { Component } from '@angular/core';

@Component({
  selector: 'app-outcomes',
  standalone: false,
  templateUrl: './outcomes.html',
  styleUrl: './outcomes.scss',
})
export class Outcomes {
  outcomes = [
    {
      icon: 'smart_toy',
      iconBg: 'rgba(10,36,99,0.08)',
      title: 'AI-Powered Test Automation',
      desc: 'Build intelligent test scripts using AI tools that write, debug, and optimize tests automatically.'
    },
    {
      icon: 'factory',
      iconBg: 'rgba(255,107,53,0.08)',
      title: 'Industry-Level Project Exposure',
      desc: 'Work on real enterprise projects — the same kind you\'ll encounter on day one of your job.'
    },
    {
      icon: 'code',
      iconBg: 'rgba(10,36,99,0.08)',
      title: 'Selenium, Playwright & More',
      desc: 'Master the most in-demand automation frameworks used by top companies worldwide.'
    },
    {
      icon: 'trending_up',
      iconBg: 'rgba(255,107,53,0.08)',
      title: 'Career-Ready Skills',
      desc: 'Interview prep, resume tips, and portfolio projects to get you job-ready from day one.'
    }
  ];

  tools = ['Selenium', 'Playwright', 'Cypress', 'Python', 'Java', 'ChatGPT', 'GitHub Copilot', 'Jenkins', 'REST API Testing', 'Postman', 'JIRA', 'Git'];
}
