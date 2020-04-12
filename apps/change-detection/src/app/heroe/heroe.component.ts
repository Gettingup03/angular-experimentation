import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeComponent implements OnInit {

  skills = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];;
  rewards: string[] = ['Happiest','Loneliest','???']; 

  constructor() { }

  ngOnInit() {
  }

  check(): void {
    console.log('HeroeComponent view checked');
  }

  changeSkill() : void {
    this.skills[0].color = 'Red';
  }

}
