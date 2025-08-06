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
export const Button = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  style = {},
  ...props
}) => {
  const baseStyle = {
    padding: "0.6rem 1.5rem",
    background: "#F4CE14",
    color: "#333",
    border: "none",
    borderRadius: "16px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background 0.2s, opacity 0.2s",
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};
