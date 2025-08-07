/**
 * Button Component
 *
 * This component provides a reusable, accessible button with customizable styling.
 * It supports type control, disabled states, external style overrides, and editorial clarity.
 *
 * Why this approach?
 * - Accessibility: `disabled` state reflects in visual and interactive behavior.
 * - Usability: Clear focus ring, readable text, and sensible sizing for all use cases.
 * - Maintainability: External `style` override makes it easy to theme without mutation.
 *
 * Example usage:
 * <Button
 *   type="submit"
 *   disabled={isSubmitting}
 *   onClick={handleSubmit}
 *   style={{ background: "#000", fontWeight: 600 }}
 * >
 *   Submit
 * </Button>
 */

import styles from "./Button.module.css";

export const Button = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
