type EventType = React.ChangeEvent<HTMLTextAreaElement>;

interface TextAreaProps {
    value: string;
    label?: string;
    name?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    onChange: (val: string) => void
}

const TextArea = ({ 
    value, 
    label, 
    name, 
    placeholder, 
    rows = 15, 
    cols = 40, 
    disabled = false, 
    onChange 
}: TextAreaProps) => {
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            { label && <label htmlFor="input-field">{label}</label>}
            <textarea 
                name={name ?? ''} 
                value={value}
                rows={rows}
                cols={cols}
                disabled={disabled}
                className="w-full p-8 text-xs bg-primary-input rounded-md outline-none" 
                placeholder={placeholder}
                onChange={(e: EventType) => onChange(e.target.value)}
            />
        </div>
    );
}

export default TextArea;