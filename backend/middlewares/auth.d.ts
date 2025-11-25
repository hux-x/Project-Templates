import type { IAuthRequest } from "@customTypes/auth.ts";
import type { Response, NextFunction } from 'express';
declare const authMiddleware: (req: IAuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default authMiddleware;
//# sourceMappingURL=auth.d.ts.map