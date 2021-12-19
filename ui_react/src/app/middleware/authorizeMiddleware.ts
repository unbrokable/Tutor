import { jwtService } from "../jwtService";
import { setAuthorize } from "../slice/AuthorizeSlice";

export const authorizeMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    try {
      if (!jwtService.get() && action.type !== setAuthorize.type) {
        dispatch(setAuthorize(false));
      } else if (jwtService.get() && action.type !== setAuthorize.type) {
        dispatch(setAuthorize(true));
      }
    } catch {
    } finally {
      next(action);
    }
  };
