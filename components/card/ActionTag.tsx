import CardInfo from "./CardInfo";

const ActionTag = ({ text, icon }: {
    text: string,
    icon?: React.ReactNode
}) => {
    return (
        <div className="flex justify-center items-center gap-1 w-20 h-8 py-1 bg-muted rounded-full">
            {!!icon && icon}
            <CardInfo 
              text={text}
              color="text-secondary"
            />
        </div>
    );
}

export default ActionTag