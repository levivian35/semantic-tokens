// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-fit rounded-none px-6 py-2 text-xl font-medium cursor-pointer transition-colors duration-200";

    // Variant-specific colours — each class maps to a component token in index.css
    const variants = {
        secondary: "bg-btn-secondary text-btn-secondary-text border border-btn-secondary-border hover:bg-btn-secondary-hover",
        primary:   "bg-btn-primary text-btn-primary-text border border-transparent hover:bg-btn-primary-hover",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
