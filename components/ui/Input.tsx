type EventType = React.ChangeEvent<HTMLInputElement>;

interface InputProps {
    value: string;
    label?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    icon?: React.ReactNode;
    variant?: string;
    disabled?: boolean;
    onChange: (val: string) => void
}

const Input = ({ 
    value, 
    label, 
    name, 
    placeholder, 
    type = "text", 
    icon, 
    variant = "primary-input",
    disabled = false, 
    onChange 
}: InputProps) => {
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            { label && <label htmlFor="input-field">{label}</label>}
            <div className="relative w-full h-10 rounded-md overflow-hidden">
                { icon && (
                    <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-full">
                        {icon}
                    </div>
                )}
                <input 
                    type={type}
                    name={name ?? ''} 
                    value={value}
                    disabled={disabled}
                    className={`w-full h-full px-8 py-2 text-xs outline-none bg-${variant}`}
                    placeholder={placeholder}
                    onChange={(e: EventType) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Input;