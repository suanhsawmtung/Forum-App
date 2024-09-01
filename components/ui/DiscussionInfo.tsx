import ActionTag from "../card/ActionTag";
import CardInfo from "../card/CardInfo";
import CommentIcon from "../icons/CommentIcon";
import LoveIcon from "../icons/LoveIcon";

const DiscussionInfo = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-muted"></div>
                <CardInfo 
                    text="posted by [username]"
                />
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <CardInfo 
                    text="1 day ago"
                    color="text-secondary"
                />
            </div>
            <div className="flex items-center gap-4">
                <ActionTag 
                    text="1.2 K"
                    icon={<LoveIcon />}
                />
                <ActionTag 
                    text="1.2 K"
                    icon={<CommentIcon />}
                />
            </div>
        </>
    );
}

export default DiscussionInfo;