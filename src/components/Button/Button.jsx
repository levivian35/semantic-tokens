// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-full px-6 py-3.5 text-sm font-medium cursor-pointer transition-colors duration-200";

    // Variant-specific colours — semantic action tokens from index.css @theme
    const variants = {
        secondary:
            "bg-action-secondary text-text-primary border border-action-secondary-border hover:bg-action-secondary-hover",
        primary:
            "bg-action-primary text-action-primary-fg border border-transparent hover:bg-action-primary-hover",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
