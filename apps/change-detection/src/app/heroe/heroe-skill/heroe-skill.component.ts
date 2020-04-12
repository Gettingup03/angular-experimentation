import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-heroe-skill',
  templateUrl: './heroe-skill.component.html',
  styleUrls: ['./heroe-skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroeSkillComponent implements OnInit {
  
  @Input() skill: { id: number, color: string };

  constructor() {}

  ngOnInit() {}

  check() {
    console.log('HeroeSkillComponent view checked');
  }
}
