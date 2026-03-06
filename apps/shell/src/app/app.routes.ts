import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemote<typeof import('mfe2/Routes')>('mfe2/Routes').then(
        (m) => m?.remoteRoutes || [],
      )
      .catch((err) => {
      console.error('MFE2 failed to load:', err);
      // Return a dummy route or redirect to an error page
      //return [{ path: '', component: MfeErrorComponent }];
      return []
    }),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemote<typeof import('mfe1/Routes')>('mfe1/Routes').then(
        (m) => m?.remoteRoutes || [],
      ).catch((err) => {
      console.error('MFE1 failed to load:', err);
      // Return a dummy route or redirect to an error page
      //return [{ path: '', component: MfeErrorComponent }];
      return []
    })
  },
  {
    path: '',
    component: NxWelcome,
  },
];
