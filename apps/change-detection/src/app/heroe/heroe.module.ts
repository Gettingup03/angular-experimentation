import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe.component';
import { HeroeSkillModule } from './heroe-skill/heroe-skill.module';

@NgModule({
  imports: [
    CommonModule,
    HeroeSkillModule
  ],
  declarations: [HeroeComponent],
  exports: [HeroeComponent]
})
export class HeroeModule { }
