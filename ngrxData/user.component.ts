import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
    selector: 'app-user-list',
    template: `
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
  `,
})
export class UserComponent {
    users$: Observable<User[]>;
    loading$: Observable<boolean>;

    constructor(private userService: UserService) {
        this.users$ = userService.entities$;
        this.loading$ = userService.loading$;
    }

    add(hero: User) {
        this.userService.add(hero);
    }

    delete(hero: User) {
        this.userService.delete(hero.id);
    }

    getHeroes() {
        this.userService.getAll();
    }

    update(hero: User) {
        this.userService.update(hero);
    }
}
