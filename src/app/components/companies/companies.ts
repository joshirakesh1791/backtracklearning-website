import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  standalone: false,
  templateUrl: './companies.html',
  styleUrl: './companies.scss',
})
export class Companies {
  companies = ['TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra', 'Capgemini', 'Accenture', 'IBM'];
}
