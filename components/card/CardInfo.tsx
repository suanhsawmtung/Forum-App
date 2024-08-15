const CardInfo = ({ text, color = "text-paragraph" }: {
    text: string,
    color?: string
}) => {
    return (
        <p
            className={`text-[10px] font-bold ${color}`}
        >
            {text}
        </p>
    );
}

export default CardInfo;