/**
 * TextField Component
 *
 * This component provides a reusable, accessible text input field for forms.
 * It supports ARIA attributes, clear labeling, error messaging, and progressive validation.
 *
 * Why this approach?
 * - Accessibility: Uses ARIA attributes and proper label associations for screen readers.
 * - Usability: Shows validation errors only after blur or submit, never on every keystroke.
 * - Maintainability: Clear prop interface with flexible style overrides and editorial comments for future developers.
 * - Extendibility: Allows external styles via containerStyle, inputStyle, labelStyle, and errorStyle props for visual consistency across design systems.
 *
 * Supported input types:
 * - "text", "email", "password", "search", "url", "tel", "number"
 * These follow native HTML input behavior and validation patterns.
 *
 * Example usage:
 * <TextField
 *   label="First Name"
 *   name="firstName"
 *   type="text"
 *   value={formState.firstName}
 *   onChange={handleChange}
 *   onBlur={() => handleBlur("firstName", formState.firstName)}
 *   error={errors.firstName}
 *   required
 *   showAsterisk
 *   placeholder="Enter your first name"
 *   inputStyle={{ background: "#f4f4f4" }}
 *   containerStyle={{ maxWidth: 600 }}
 * />
 */

import styles from "./FormField.module.css";

export const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  showAsterisk = false,
  labelClassName = "",
  labelStyle = {},
  containerStyle = {},
  inputStyle = {},
  errorStyle = {},
  ...props
}) => {
  const fieldId = `${name}Field`;
  const errorId = `${name}Error`;

  return (
    <div
      className={styles.fieldContainer}
      role="group"
      aria-labelledby={`fieldIdLabel`}
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1.25rem",
        width: "100%",
        maxWidth: 400,
        ...containerStyle,
      }}
    >
      <label
        id={`fieldIdLabel`}
        htmlFor={fieldId}
        className={styles.label}
        style={{
          marginBottom: "0.5rem",
          fontWeight: 500,
          fontSize: "1rem",
          color: "#222",
          ...labelStyle,
        }}
      >
        {label}
        {required && showAsterisk && (
          <span aria-hidden="true" style={{ color: "crimson" }}>
            *
          </span>
        )}
      </label>
      <input
        id={fieldId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        style={{
          padding: "0.5rem 0.75rem",
          border: error ? "1.5px solid crimson" : "1.5px solid #bbb",
          borderRadius: 6,
          fontSize: "1rem",
          background: error ? "#fff6f6" : "#fff",
          outline: "none",
          transition: "border-color 0.2s ease",
          ...inputStyle,
        }}
        {...props}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="assertive"
          style={{
            color: "crimson",
            marginTop: "0.4rem",
            fontSize: "0.95rem",
            fontWeight: 400,
            lineHeight: 1.3,
            ...errorStyle,
          }}
          {...props}
          className={styles.errorMessage}
        >
          {error}
        </p>
      )}
    </div>
  );
};
