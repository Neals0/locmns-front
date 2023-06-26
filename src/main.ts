import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt+QHJqVEZrW05Ff0BAXWFKblJ2T2NbdV90ZCQ7a15RRnVfRFxqSH5TdUBqUH1deQ==;Mgo+DSMBPh8sVXJ1S0R+XVFPcUBDVHxLflF1VWJZdV5yflRCcC0sT3RfQF5jT39ad0VjWnpXeXBVTw==;ORg4AjUWIQA/Gnt2VFhiQlBEfVhdXGpWfFN0RnNYf1Rwdl9HZEwgOX1dQl9gSXhSf0RjWXxbeX1QQGk=;MjQ2NDY5OEAzMjMxMmUzMDJlMzBDVy8zSTFtbDRtZ1R3Z0hpR3ZjVmdicXBWbWRpTW1VL2dkbmpTcmQ2aVJBPQ==;MjQ2NDY5OUAzMjMxMmUzMDJlMzBRRWhRQk9hNXVyaXJlODNLZnBFNW5adkhEbnlFbFNva0FFcWN6ZjVHMzVNPQ==;NRAiBiAaIQQuGjN/V0d+Xk9FdlRFQmJAYVF2R2BJfl56dFdMYVhBNQtUQF1hSn5Vd0xiWX9acHRVRGlV;MjQ2NDcwMUAzMjMxMmUzMDJlMzBianlsQ080cTg3NEtyaGlYWGdrNGEwL3ZDTXprMW9CV2M0ZUVtR0habEpBPQ==;MjQ2NDcwMkAzMjMxMmUzMDJlMzBpdm9vMWNGemIxUnFhMGZBbzN0TEVKaDd2MGhEOTVDMVZJamJxK3VlWmFjPQ==;Mgo+DSMBMAY9C3t2VFhiQlBEfVhdXGpWfFN0RnNYf1Rwdl9HZEwgOX1dQl9gSXhSf0RjWXtecHVXQGk=;MjQ2NDcwNEAzMjMxMmUzMDJlMzBGeGMrdzYvWDNhVmd1Y0Jlc1NkS3QxM2F5NzR6dzVPSWRRT00rR0tpNVdZPQ==;MjQ2NDcwNUAzMjMxMmUzMDJlMzBXV1R3bDVyZVRXZWZKMDd2YjRDdm9yNitWdFdyK0RCS0dLL0ZSeTlCNHNRPQ==;MjQ2NDcwNkAzMjMxMmUzMDJlMzBianlsQ080cTg3NEtyaGlYWGdrNGEwL3ZDTXprMW9CV2M0ZUVtR0habEpBPQ==');

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));