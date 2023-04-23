import { Component } from '@angular/core';
import { login } from './store/actions/app.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  user?: any;

  constructor(private store: Store<any>) {
  }

  ngAfterViewInit() {
    this.user = localStorage.getItem('user');
    this.store.dispatch(login({user: JSON.parse( this.user)}))
  }
}
