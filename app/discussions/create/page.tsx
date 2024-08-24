"use client";

import Card from "@/components/card/Card";
import CardTitle from "@/components/card/CardTitle";
import SendIcon from "@/components/icons/SendIcon";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { montserrat } from "@/theme/fonts";
import { useState } from "react";

const DiscussionCreate = () => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    return (
        <div className="mb-20">
            <Card>
                <div className={`flex flex-col gap-6 pb-10 ${montserrat.className}`}>
                    <CardTitle 
                        title="Create Discussion"
                        icon={<span className="text-secondary">#</span>}
                    />
                    <Input 
                        value={title}
                        placeholder="Title..."
                        onChange={(val) => setTitle(val)}
                    />
                    <TextArea 
                        value={content}
                        placeholder="Content..."
                        onChange={(val) => setContent(val)}
                    />
                    <div className="w-1/6">
                        <Button 
                            type="button"
                            text="Send"
                            icon={<SendIcon />}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default DiscussionCreate;