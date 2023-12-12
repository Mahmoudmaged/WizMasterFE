import { Component, HostListener, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isNavbarScrolled: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarScrolled = scrollPosition > 50;
    if (this.isNavbarScrolled) {
      $(".active").addClass("active2");
    } else {
      $(".active").removeClass("active2");
    }

    if ($(".navbar-toggler").is(":visible") && $("#navbarSupportedContent").is(":visible")) {
      $(".active").addClass("active2");
      $(".navbar").addClass("changeColor")
    }
  }


  ngOnInit(): void {

    $(".navbar-toggler").on('click', function () {
      $(".active").addClass("active2");
      $(".navbar").addClass("changeColor")
    })


  }

  constructor(private  _router:Router){

  }
 
  ScrollIntoView(elem: string) {
    $(".navLink").removeClass("active")
    $(".navLink").removeClass("active")
    
    $(`.${elem}`).addClass("active")

    this._router.navigateByUrl(`/refresh?sec=${elem}`)
  }
}
