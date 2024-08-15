import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-period-page',
  templateUrl: './period-page.component.html',
  styleUrl: './period-page.component.scss',
})
export class PeriodPageComponent {
  title: string = 'Configurar periodo';
  days: number[] = [1, 2, 3, 4, 5, 6, 7];
  range: FormGroup;

  constructor(private fb: FormBuilder) {
    this.range = this.fb.group({
      start: [''],
      end: [''],
    });
  }

  onSubmit(): void {}

  onDateChange() {
    let daysOfPeriod = this.getDaysDifference(this.range);
    if (daysOfPeriod !== null && daysOfPeriod > 0) {
      this.days = [];
      for (let index = 0; index < daysOfPeriod; index++) {
        this.days.push(index + 1);
      }
    } else {
      this.days = [];
    }
  }

  getDaysDifference(range: FormGroup): number | null {
    const start: Date | null = range.get('start')?.value;
    const end: Date | null = range.get('end')?.value;

    if (start && end) {
      // Convertir las fechas a milisegundos y calcular la diferencia
      const timeDiff = end.getTime() - start.getTime();

      // Convertir la diferencia de milisegundos a días
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      return daysDiff;
    }

    return null; // Si alguna de las fechas es null
  }
}
