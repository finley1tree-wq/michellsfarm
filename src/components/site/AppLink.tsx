import type { AnchorHTMLAttributes, MouseEvent } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export function Link({ to, onClick, target, ...props }: AppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !to.startsWith("/")
    ) {
      return;
    }

    event.preventDefault();
    if (window.location.pathname !== to) {
      window.history.pushState(null, "", to);
      window.dispatchEvent(new Event("app:navigate"));
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  return <a href={to} target={target} onClick={handleClick} {...props} />;
}