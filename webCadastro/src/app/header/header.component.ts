import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeClass: string = 'active';

  constructor() {
    
   }

  ngOnInit(): void {
    let mobileMenu = document.querySelector('.mobile-menu');
    let navList = document.querySelector(".nav-list")!;
    let navLink = document.querySelectorAll(".nav-list li")!;
    
  

    if(mobileMenu){
      this.addClickEvent(mobileMenu, navList, navLink);
    }

 
  }


  addClickEvent(mob:Element, nav:Element,links: NodeListOf<Element>){
    mob.addEventListener("click", () => nav.classList.toggle(this.activeClass));
    this.animateLinks(links);
  }

   animateLinks(links: any) {
     links.forEach((link:HTMLElement, i:number) => {
       
       link.style.animation?(link.style.animation = ""):(link.style.animation =`navigator 0.5s ease forwards 0.9s`);

       console.log(i);
     } )

     
    
   }


  
    
  }
  



  


