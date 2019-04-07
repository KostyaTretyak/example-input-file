import { Injectable } from '@angular/core';

import { ApiMockCallbackResponse, ApiMockRouteGroup, ApiMockService } from '@ng-stack/api-mock';

@Injectable({ providedIn: 'root' })
export class ApiMockAvatarsService implements ApiMockService {
  getRouteGroups(): ApiMockRouteGroup[] {
    return [
      [
        {
          path: 'api/users/250/avatars/1',
          callbackResponse: this.getResponse()
        }
      ]
    ];
  }

  private getResponse(): ApiMockCallbackResponse {
    return () => {
      return { url: 'https://example.com/avatar/1' };
    };
  }
}
