"use client";

import ADS from "@/components/ADS";
import Card from "@/components/card/Card";
import CardBody from "@/components/card/CardBody";
import CardTitle from "@/components/card/CardTitle";
import SendIcon from "@/components/icons/SendIcon";
import Button from "@/components/ui/Button";
import DiscussionInfo from "@/components/ui/DiscussionInfo";
import TextArea from "@/components/ui/TextArea";
import { montserrat } from "@/theme/fonts";
import { useState } from "react";

const DiscussionDetail = () => {
    const [answer, setAnswer] = useState('');

    return (
        <Card>
            <div className={`flex flex-col gap-6 pb-4 ${montserrat.className}`}>
                <CardTitle
                    title="Title"
                    icon={<span className="text-secondary">#</span>}
                />
                <CardBody 
                    body="Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here .Description come here .Description come here .Description come here..."
                />
                <CardBody 
                    body="Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here. Description come here .Description come here .Description come here .Description come here..."
                />
            </div>
            <div className={`flex justify-between items-center w-full mb-12 ${montserrat.className}`}>
                <DiscussionInfo />
            </div>
            <div className="flex justify-between items-start gap-6">
                <div className={`flex flex-col gap-6 w-2/3 ${montserrat.className}`}>
                    <TextArea 
                        value={answer}
                        rows={8}
                        placeholder="Type your feedback here..."
                        onChange={(val) => setAnswer(val)}
                    />
                    <div className="w-1/6">
                        <Button 
                            type="button"
                            text="Send"
                            icon={<SendIcon />}
                        />
                    </div>
                </div>
                <div className="w-1/3">
                    <ADS />
                </div>
            </div>
        </Card>
    );
}

export default DiscussionDetail;