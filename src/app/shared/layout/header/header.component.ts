import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  useLanguage(language: string) {
    localStorage.setItem('language', language);
    // this.translate.use(language);
    this.toggleNavbar();
  }

}
