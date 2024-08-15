const CardTitle = ({
    title,
    icon
}: {
    title: string,
    icon?: React.ReactNode
}) => {
    return (
        <h1 className="flex justify-start items-center gap-2">
            {!!icon && icon}
            {title}
        </h1>
    );
}

export default CardTitle;