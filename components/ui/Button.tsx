const Button = ({
    type = "button",
    icon,
    text,
    variant = "primary"
}: {
    type: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    text: string | number;
    variant?: string
}) => {
    return (
        <button
            type={type}
            className={`flex justify-center items-center w-full p-2 bg-${variant} rounded-md`}
        >
            <div className="flex items-center gap-2 text-white font-bold">
                { !!icon && icon }
                { text }
            </div>
        </button>
    );
}

export default Button;