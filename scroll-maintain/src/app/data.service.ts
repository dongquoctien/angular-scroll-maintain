import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  data$: Observable<string[]> = this.dataSubject.asObservable();

  constructor() {
    // Simulate data fetching
    setTimeout(() => {
      this.dataSubject.next(this.generateData());
    }, 1000);
  }

  private generateData(): string[] {
    return Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  }

  refreshData(): void {
    this.dataSubject.next(this.generateData());
  }
}
