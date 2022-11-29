import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  circluar: any;
  slides: any = [];


  searchValue: string = '';
  searchType: any = 'crop';
  data = { searchValue: this.searchValue, searchType: this.searchType }
  

  constructor(
    private departmentService: DepartmentService,
    private authService: AuthService,
    private route: Router
  ) {}

  getClass(index: any) {
    if (index % 2 == 0) {
      return 'item-collection-1';
    } else {
      return 'item-collection-2';
    }
  }

/***********start Search*************** */
  startSearch() {
    this.data['searchValue'] = this.searchValue;
    this.data['searchType'] = this.searchType;
    if (this.data['searchType'] === 'districts') {
      this.route.navigate(['/dist', this.data['searchValue'], this.data['searchType']]);
      return;
    }
    if (this.data['searchType'] === 'technology') {
      this.route.navigate(['/technology', this.data['searchValue'], this.data['searchType']]);
      return;
    }
    this.route.navigate(['/products', this.data['searchValue'], this.data['searchType']]);
  }

  selectValue() {
    this.data.searchValue = this.searchValue.trim();
  }

  ngOnInit() {

    /***********Notifictation*************** */
    this.departmentService.getAllCircularUpload().subscribe((c) => {
      console.log('>>>>>>>>>>>subscribe>>>>>>>>>>>>>>>>>>', c);
      this.circluar = c;
    });

    /***********Carousal*************** */
    this.authService.getHomeSuccessStory().subscribe((response) => {
      // console.log(">>>>>>>>>>>slides>>>>>>>>>>>>>>>>>>", response);
      // this.slides = response;
      for (let i = 0; i < response.length; i++) {
        if (
          response[i] &&
          response[i].child &&
          response[i].child.length > 0 &&
          response[i].child[0].galPermission 
        ) {
          // console.log(">>>>>>>>>>>response[i]>>>>>>>>>>>>>>>>>>", response[i]);
          this.slides.push({
            slideImage: response[i].child[0].filePath,
            slideText: response[i].description,
          });
        }
      }
      console.log (">>>>>>this.slides>>>>>>>>>>", this.slides, this.slides.length);
    });
    
  }
}
