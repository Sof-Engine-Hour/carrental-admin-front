import { Injectable, inject } from '@angular/core';
import { AuthService, BaseToken, User } from '@core/authentication';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { switchMap, tap } from 'rxjs';
import { Menu, MenuService } from './menu.service';
import { UserV2 } from '@core/authentication';

@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private readonly authService = inject(AuthService);
  private readonly menuService = inject(MenuService);
  private readonly permissonsService = inject(NgxPermissionsService);
  private readonly rolesService = inject(NgxRolesService);

  /**
   * Load the application only after get the menu or other essential informations
   * such as permissions and roles.
   */
  load() {
    return new Promise<void>((resolve, reject) => {
      this.authService
        .change()
        .pipe(
          tap(user => this.setPermissionsV2(user)),
          switchMap(() => this.authService.menu()),
          tap(menu => this.setMenu(menu)) ,
        )
        .subscribe({
          next: () => resolve(),
          error: () => resolve(),
        });
    });
  }

  private setMenu(menu: Menu[]) {
    this.menuService.addNamespace(menu, 'menu');
    this.menuService.set(menu);
  }

  private setPermissionsV2(user: UserV2) {


    const userRoles = user.realm_access?.roles || []; // Get roles or use an empty array

    // Dynamically build the roles object from the roles array
    const rolesObj = userRoles.reduce((rolesMap, role) => {
      rolesMap[role] = []; // Assuming each role maps to an empty array for permissions
      return rolesMap;
    }, {} as { [name: string]: string[] });

    const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
    this.permissonsService.loadPermissions(permissions);
    this.rolesService.flushRoles();
    this.rolesService.addRoles(rolesObj);
  }


  /**
   * 
   * @this is the original setPermissions
   */
  private setPermissions(user: User) {
    // In a real app, you should get permissions and roles from the user information.
    const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
    this.permissonsService.loadPermissions(permissions);
    this.rolesService.flushRoles();
    this.rolesService.addRoles({ ADMIN: permissions });

    // Tips: Alternatively you can add permissions with role at the same time.
    // this.rolesService.addRolesWithPermissions({ ADMIN: permissions });
  }

  private checkToken(token :BaseToken) : void {
    console.log(token.access_token + "🔖")
  }
}
