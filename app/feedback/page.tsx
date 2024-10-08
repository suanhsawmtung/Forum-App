"use client";

import Card from "@/components/card/Card";
import CardTitle from "@/components/card/CardTitle";
import SendIcon from "@/components/icons/SendIcon";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";
import { montserrat } from "@/theme/fonts";
import { useState } from "react";

const Feedback = () => {
    const [ feedback, setFeedback ] = useState('');

    return (
        <div className="mb-20">
            <Card>
                <div className={`flex flex-col gap-6 pb-10 ${montserrat.className}`}>
                    <CardTitle 
                        title="Feedback"
                        icon={<span className="text-secondary">#</span>}
                    />
                    <TextArea 
                        value={feedback}
                        placeholder="Type your feedback here..."
                        onChange={(val) => setFeedback(val)}
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

export default Feedback;