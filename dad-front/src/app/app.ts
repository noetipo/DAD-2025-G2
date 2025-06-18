import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Services} from './core/service/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'dad-front';

  constructor(private services: Services) {
  }

  ngOnInit(): void {

    this.getCategories();
    //throw new Error('Method not implemented.');

  }

  private getCategories(): void {
    this.services.getCategories().subscribe(res => {
      console.log(res);
    });
  }
}
