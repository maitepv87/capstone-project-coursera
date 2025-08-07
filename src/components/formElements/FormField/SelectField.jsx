/**
 * SelectField Component
 *
 * This component provides a reusable, accessible <select> dropdown for forms.
 * It is designed with ARIA support, label association, error messaging, and editorial clarity.
 *
 * Why this approach?
 * - Accessibility: ARIA attributes ensure screen reader support for required fields and errors.
 * - Usability: Initial placeholder is hidden but accessible. Optional required asterisk supports editorial clarity.
 * - Flexibility: Custom label styling, dynamic option rendering, error messaging, and external style overrides.
 * - Maintainability: Clear prop interface, safe defaults, and internal documentation for future developers.
 * - Extendibility: Supports external styles via containerStyle, selectStyle, and errorStyle props for system-level consistency.
 *
 * Example usage:
 * <SelectField
 *   label="Country"
 *   name="country"
 *   value={formState.country}
 *   onChange={handleChange}
 *   onBlur={() => handleBlur("country", formState.country)}
 *   options={[{ label: "USA", value: "us" }, { label: "Canada", value: "ca" }]}
 *   error={errors.country}
 *   required
 *   showAsterisk
 *   selectStyle={{ background: "#f4f4f4" }}
 *   containerStyle={{ maxWidth: 600 }}
 *   errorStyle={{ color: "orange" }}
 * />
 *
 * Accessibility notes:
 * - Uses aria-labelledby to link the label to the select field.
 * - aria-required and aria-invalid reflect the validation state.
 * - aria-describedby links to the error message only when present.
 * - Placeholder option is hidden from selection but visible to screen readers.
 */

import styles from "./FormField.module.css";

export const SelectField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  placeholder = "Select an option",
  error,
  required = false,
  showAsterisk = false,
  labelClassName = "",
  labelStyle = {},
  containerStyle = {},
  selectStyle = {},
  errorStyle = {},
  ...props
}) => {
  const fieldId = `${name}Field`;
  const errorId = `${name}Error`;

  const { onOpen, ...filteredProps } = props;

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
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={(e) => {
          onOpen?.(e);
        }}
        required={required}
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
          ...selectStyle,
        }}
        {...filteredProps}
        className={`${styles.select} ${error ? styles.selectError : ""}`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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
