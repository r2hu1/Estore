import ContactForm from "./_components/ContactForm";

export const metadata = {
    title: 'Contact Us',
    description: 'Want to get in touch? We’d love to hear from you.',
}

export default function Page() {
    return (
        <div>
            <ContactForm/>
        </div>
    )
}