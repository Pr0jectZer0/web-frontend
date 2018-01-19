export class DateModel {
  date: Date;

  constructor(unix: number) {
    this.date = new Date(unix);
  }

  getMonth(): string {
    let month: string = '';
    switch(this.date.getMonth()) {
      case 0: month = 'Januar'; break;
      case 1: month = 'Februar'; break;
      case 2: month = 'März'; break;
      case 3: month = 'April'; break;
      case 4: month = 'Mai'; break;
      case 5: month = 'Juni'; break;
      case 6: month = 'Juli'; break;
      case 7: month = 'August'; break;
      case 8: month = 'September'; break;
      case 9: month = 'Oktober'; break;
      case 10: month = 'November'; break;
      case 11: month = 'Dezember'; break;
    }
    return month;
  }

  getYear(): number {
    return this.date.getFullYear();
  }

  getDay(): number {
    return this.date.getDay();
  }

  getLastDay(): number {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  }

  getDays(): { weekday: number, day: number }[] {
    let calendar: { weekday: number, day: number }[] = [];
    let lastday = this.getLastDay();

    for(let i = lastday; i > 0; i--) {
      let day = new Date(this.date.getFullYear(), this.date.getMonth(), i);
      calendar.push({ weekday: day.getDay(), day: day.getDate() });
    }
    return calendar.reverse();
  }

  getCalendarWeek(): { weekday: number, day: number }[][] {
    let calendarWeek: { weekday: number, day: number }[][] = [];
    let calendar = this.getDays();
    let week: { weekday: number, day: number }[] = [];

    for(let i = 0; i < this.getLastDay();) {
      week = [];
      for(let y = 0; y < 7; y++) {
        if(calendar[i] != undefined && calendar[i].weekday == y) {
          week.push(calendar[i]);
          i++;
        } else {
          week.push({weekday: 0, day:0})
        }
      }
      calendarWeek.push(week);
    }

    console.log(calendarWeek);
    return calendarWeek;
  }
}
