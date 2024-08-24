import Card from "@/components/card/Card";
import CardTitle from "@/components/card/CardTitle";
import CardBody from "@/components/card/CardBody";
import CardInfo from "@/components/card/CardInfo";
import ActionTag from "@/components/card/ActionTag";
import LoveIcon from "@/components/icons/LoveIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import DotMenuIcon from "@/components/icons/DotMenuIcon";
import { lora, montserrat } from "@/theme/fonts";

const DiscussionCard = () => {
    return (
        <Card>
            <div className={`flex flex-col gap-3 ${lora.className}`}>
                <div className="flex justify-between items-center">
                    <CardTitle
                        title="Title Go Here"
                        icon={<span className="text-secondary">#</span>}
                    />
                    <DotMenuIcon />
                </div>
                <CardBody 
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit at. Quaerat amet quod, nostrum dolore, omnis vitae minus perspiciatis libero porro ut consectetur possimus ipsum deserunt vel adipisci labore cupiditate illo hic soluta ratione totam tempore a. Libero reprehenderit consectetur commodi porro, rem placeat deserunt autem molestias ab laboriosam incidunt rerum quisquam! Laudantium quisquam eius amet? Iusto, eos adipisci."
                />
            </div>
            <div className={`absolute left-0 bottom-0 flex justify-between items-center w-full px-6 py-2 border-t-2 border-muted ${montserrat.className}`}>
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
            </div>
        </Card>
    );
}

export default DiscussionCard;