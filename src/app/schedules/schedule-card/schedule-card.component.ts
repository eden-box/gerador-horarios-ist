import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {formatTime} from '../../_util/Time';

import { faCaretDown, faCaretUp, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Schedule } from '../../_domain/Schedule';
import {ClassType, minifyClassType} from '../../_domain/ClassType';
import {Lesson} from '../../_domain/Lesson';

declare let $;

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {

  @Input() schedule: Schedule;
  @Output() removeBtn = new EventEmitter<number>();

  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faTimes = faTimes;

  expanded = false;
  mobileView = false;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.onWindowResize();
  }

  toggle(): void {
   const expanded = $('.wrapper').attr('aria-expanded');
   this.expanded = expanded !== 'true';
  }

  minifyClassType(type: ClassType): string {
    return minifyClassType(type);
  }

  printLesson(lesson: Lesson): string {
    let s = '';
    const weekday = lesson.start.getDay();

    if (this.translateService.currentLang === 'pt-PT') {
      switch (weekday) {
        case 1:
          s += 'Seg';
          break;

        case 2:
          s += 'Ter';
          break;

        case 3:
          s += 'Qua';
          break;

        case 4:
          s += 'Qui';
          break;

        case 5:
          s += 'Sex';
          break;

        case 6:
          s += 'Sáb';
          break;
      }
    } else {
      switch (weekday) {
        case 1:
          s += 'Mon';
          break;

        case 2:
          s += 'Tue';
          break;

        case 3:
          s += 'Wed';
          break;

        case 4:
          s += 'Thu';
          break;

        case 5:
          s += 'Fri';
          break;

        case 6:
          s += 'Sat';
          break;
      }
    }

    s += ', ' + formatTime(lesson.start) + ' - ' + formatTime(lesson.end);
    return s;
  }

  removeBtnClicked(): void {
    this.removeBtn.emit(this.schedule.id);
    console.log(this.schedule.id);
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.mobileView = window.innerWidth < 991.98; // phones & tablets
  }
}
