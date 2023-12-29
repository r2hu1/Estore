"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        location.href = "mailto:admin@rahul.eu.org?subject=EStore Inquiry&body=Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className="px-8 md:px-20 py-20">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 mb-10 dark:opacity-25 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="text-center">
                <h1 className="text-3xl w-fit font-bold mx-auto gradientText">Contact Us<span className="text-white">.</span></h1>
                <p className="text-xs max-w-md mt-1 mx-auto">We're delighted you want to get in touch. Please complete the form below with your details and message, and we'll do our best to respond promptly</p>
            </div>
            <form className="grid gap-2 max-w-lg mt-10 mx-auto" onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input required onChange={(e) => setName(e.target.value)} type="text" placeholder="Tony Stark" id="name" className="mb-3" value={name}></Input>
                <Label htmlFor="email">Email</Label>
                <Input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tony@stark.com" id="email" className="mb-3" value={email}></Input>
                <Label htmlFor="message">Message</Label>
                <Textarea required onChange={(e) => setMessage(e.target.value)} placeholder="I need a custom website..." id="message" className="mb-3 min-h-[130px]" value={message}></Textarea>
                <Button type="submit" className="w-full mt-2">Submit</Button>
            </form>
        </div>
    )
}