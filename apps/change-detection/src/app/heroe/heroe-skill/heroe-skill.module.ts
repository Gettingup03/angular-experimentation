import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeSkillComponent } from './heroe-skill.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroeSkillComponent],
  exports: [ HeroeSkillComponent]
})
export class HeroeSkillModule { }
