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
    mob.addEventListener("click", () => {

      //ativando a classe nav-list, para receber os estilos aplicados para a classe ativa
       nav.classList.toggle(this.activeClass)

       /*Animação do link esta dentro do evento de click porque o 
        momento que o evento é acionado é o momento onde quero que os links sejam aanimados */
       links.forEach((link:any, i) => {
        link.style.animation?(link.style.animation = ""):(link.style.animation =`navigator 0.5s ease forwards ${i/6 + 0.3}s`);
        console.log(i/7 + 0.3);
      } );
      });
    
  }




  
    
  }
  



  


