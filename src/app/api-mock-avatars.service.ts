import { Injectable } from '@angular/core';

import { ApiMockService, ApiMockRootRoute, ApiMockResponseCallback } from '@ng-stack/api-mock';

@Injectable({ providedIn: 'root' })
export class ApiMockAvatarsService implements ApiMockService {
  getRoutes(): ApiMockRootRoute[] {
    return [
      {
        path: 'api/users/250/avatars/1',
        responseCallback: this.getResponse(),
      },
    ];
  }

  private getResponse(): ApiMockResponseCallback {
    return () => {
      return { url: 'https://example.com/avatar/1' };
    };
  }
}
