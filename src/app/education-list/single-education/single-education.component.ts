import { Component, OnInit } from '@angular/core';
import { Education } from '../../models/education.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-single-education',
  templateUrl: './single-education.component.html',
  styleUrls: ['./single-education.component.css']
})
export class SingleEducationComponent implements OnInit {
  education: Education;
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private educationService: EducationService) { }

  ngOnInit() {
    this.education = new Education('', '', '', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.educationService.getSingleEducation(+id).then((education: Education) => {
      this.education = education;
    });
  }
  onBack() {
    this.router.navigate(['/education-list']);
  }
}
