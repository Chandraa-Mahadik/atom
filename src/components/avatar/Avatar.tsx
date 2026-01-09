import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/cn";
import {
  avatarVariants,
  type AvatarAppearance,
  type AvatarShape,
  type AvatarSize,
  type AvatarVariant,
  type AvatarVariants,
} from "./avatarVariants";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<"div">,
    AvatarVariants {
  /**
   * Render via Radix Slot (e.g. wrap a Link, button, etc.)
   * Consumer usage stays identical.
   */
  asChild?: boolean;

  /**
   * Initials shown when no src or when image fails.
   * Should typically be 1–3 characters.
   */
  initials?: string;

  /**
   * Optional image source.
   * If image fails to load, component falls back to initials/children.
   */
  src?: string;

  /**
   * Alt text for the image.
   * If src is provided and alt is missing, we use aria-label OR initials OR fallback "AZ".
   */
  alt?: string;

  /**
   * If true, avatar is decorative and hidden from assistive tech.
   */
  decorative?: boolean;

  /**
   * Semantic variant (colors).
   */
  variant?: AvatarVariant;

  /**
   * Fill level.
   */
  appearance?: AvatarAppearance;

  /**
   * Size.
   */
  size?: AvatarSize;

  /**
   * Shape.
   */
  shape?: AvatarShape;

  /**
   * Chip/list layout option.
   */
  fullWidth?: boolean;

  /**
   * Highlight ring.
   */
  withRing?: boolean;
}

/**
 * Avatar
 * - children override everything
 * - else tries src (with fallback on error)
 * - else initials
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      asChild = false,
      initials,
      src,
      alt,
      decorative = false,
      children,

      // variants
      variant,
      appearance,
      size,
      shape,
      withRing,

      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    const [imageError, setImageError] = React.useState(false);

    // Reset error state when src changes
    React.useEffect(() => {
      if (src) setImageError(false);
    }, [src]);

    const handleImageError = React.useCallback(() => {
      setImageError(true);
    }, []);

    const showImage = Boolean(src) && !imageError && !children;
    const showInitials = !showImage && !children && Boolean(initials);

    // Determine accessible label fallback for img alt
    // - prefer explicit alt
    // - then aria-label (from props)
    // - then initials
    // - then 'AZ' (as per your tests)
    const ariaLabelFromProps =
      (props["aria-label"] as string | undefined) ?? undefined;

    const imgAlt = decorative
      ? ""
      : alt || ariaLabelFromProps || initials || "AZ";

    // Content priority: children > img > initials > null
    const content = children ? (
      children
    ) : showImage ? (
      <img
        src={src}
        alt={imgAlt}
        className="h-full w-full object-cover"
        onError={handleImageError}
        aria-hidden={decorative || undefined}
      />
    ) : showInitials ? (
      <span aria-hidden={decorative || undefined}>{initials}</span>
    ) : null;

    // If decorative, hide container from screen readers.
    // If not decorative and no image but we show initials, treat container like an image.
    const ariaProps = decorative
      ? ({ "aria-hidden": true } as const)
      : showInitials && !ariaLabelFromProps && !alt
      ? ({
          role: "img",
          "aria-label": initials,
        } as const)
      : ariaLabelFromProps && !src
      ? ({
          role: "img",
          "aria-label": ariaLabelFromProps,
        } as const)
      : ({} as const);

    return (
      <Comp
        ref={ref}
        data-slot="avatar"
        className={cn(
          avatarVariants({
            variant,
            appearance,
            size,
            shape,
            withRing,
          }),
          className
        )}
        {...ariaProps}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Avatar.displayName = "Avatar";
