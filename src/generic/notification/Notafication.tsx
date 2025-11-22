import { notification } from "antd";

type NotifyType =
  | "confirm_password"
  | "add_to_cart"
  | "add_to_favorites"
  | "remove_from_favorites";

export const notificationApi = (): ((type: any) => void) => {
  const notify = (type: any) => {
    switch (type) {
      case "confirm_password":
        return notification.error({ message: "Passwords don't match !" });
      case "add_to_cart":
        return notification.success({ message: "Product added to cart!" });
      case "add_to_favorites":
        return notification.success({ message: "Added to favorites" });
      case "remove_from_favorites":
        return notification.info({ message: "Removed from favorites" });
      default:
        return;
    }
  };

  return notify;
};
