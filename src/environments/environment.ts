// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useHash: false,
  baseUrl:"" ,
  /**
   *$ autherzation Server Config
  */
  autherzationLoginBaseUrl:"http://localhost:8081/realms/realm1" ,
  clientId :"client1" ,
  grantType : {
    login: "password" as string ,
    refresh:"refresh_token" as string,
  },
  tokenKey:"ng-matero-token" ,
  tokenType:"bearer" ,
  /**
   * $backend Serve 1
   */
  backend1 : "http://localhost:8080/api" ,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
