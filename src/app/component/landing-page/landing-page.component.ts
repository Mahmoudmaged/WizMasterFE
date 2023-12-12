import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

declare let $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {


    const scrollPosition = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;



    if (scrollPosition > $("#home").offset().top-5 && scrollPosition < $("#BeDigital").offset().top-5) {
      $(".nav-link").removeClass('active')
      $(".nav-link").removeClass('active2')
      if (scrollPosition > 50) {
        $(".home").addClass('active2')
      } else {
        $(".home").addClass('active')
      }
    } else if (scrollPosition > $("#BeDigital").offset().top-5 && scrollPosition < $("#ourWorkS").offset().top-5) {
      $(".nav-link").removeClass('active')
      $(".nav-link").removeClass('active2')
      $(".BeDigital").addClass('active2')
    } else if (scrollPosition > $("#ourWorkS").offset().top-5 && scrollPosition < $("#ourTeam").offset().top-5) {
      $(".nav-link").removeClass('active')
      $(".nav-link").removeClass('active2')
      $(".ourWorkS").addClass('active2')
    } else if (scrollPosition > $("#ourTeam").offset().top-5 && scrollPosition < $("#ourContact").offset().top-5) {
      $(".nav-link").removeClass('active')
      $(".nav-link").removeClass('active2')
      $(".ourTeam").addClass('active2')
    } else if (scrollPosition > $("#ourContact").offset().top-5) {
      $(".nav-link").removeClass('active')
      $(".nav-link").removeClass('active2')
      $(".ourContact").addClass('active2')
    } else {
      if (scrollPosition > 50) {
        $(".home").addClass('active2')
      } else {
        $(".home").addClass('active')
      }
    }
  }

  // Start beDigitalSlider
  beDigitalSliderIndex: number = 1
  beDigitalSlider: any[] = [
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '../../../assets/Web/Cauldron4.png' },
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit2.', img: '../../../assets/Web/144.png' },
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit3.', img: '../../../assets/Web/6.png' },
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit4.', img: '../../../assets/Web/7.png' },
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit25.', img: '../../../assets/Web/144.png' },
    { caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit6.', img: '../../../assets/Web/144.png' },
  ]
  beDigitalSliderObject: any = this.beDigitalSlider[0]
  beDigitalSliderNext() {
    if (this.beDigitalSliderIndex + 1 > this.beDigitalSlider.length) {
      this.beDigitalSliderIndex = 1
    } else {
      this.beDigitalSliderIndex = this.beDigitalSliderIndex + 1
    }
    return this.beDigitalSliderObject = this.beDigitalSlider[this.beDigitalSliderIndex - 1]
  }
  beDigitalSliderPrevious() {
    if (this.beDigitalSliderIndex - 1 < 1) {
      this.beDigitalSliderIndex = this.beDigitalSlider.length
    } else {
      this.beDigitalSliderIndex = this.beDigitalSliderIndex - 1
    }
    return this.beDigitalSliderObject = this.beDigitalSlider[this.beDigitalSliderIndex - 1]
  }
  // End beDigitalSlider
  // prime slider
  products: any[] = [{
    name: "mahmoud Elwan",
    img: '../../../assets/Web/avatar/ava.png',
    description: 'FullStack web developer Node.js/Angular',
  }, {
    name: "mahmoud Elwan",
    img: '../../../assets/Web/avatar/ava.png',
    description: 'FullStack web developer Node.js/Angular',


  }, {
    name: "mahmoud Elwan",
    img: '../../../assets/Web/avatar/ava.png',
    description: 'FullStack web developer Node.js/Angular',

  }];
  responsiveOptions;

  constructor(private _ActivatedRoute: ActivatedRoute) {


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }

    ]

  }
  ngOnInit(): void {
    const offset = $(`#${this._ActivatedRoute.snapshot.queryParams['sec']}`).offset();
    window.scrollTo(0, offset?.top || 0)

    setInterval(() => {
      this.beDigitalSliderNext()
    }, 3000)

  }






}
