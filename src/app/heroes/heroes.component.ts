import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  /* selectedHero: Hero;
   onSelectedHero( hero: Hero): void {
    this.selectedHero = hero;
  } */
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }
   ngOnInit(): void {
      this.getAllHeroes();
    }
   getAllHeroes(): void {
       this.heroService.getAllHeroes().subscribe(heroes => this.heroes = heroes);
     }
   addName(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => { this.heroes.push(hero); });
   }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
