export default function Page() {
    return (
        <div className="px-8 md:px-20 py-20">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 mb-10 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            <div className="mb-5 text-center">
                <h1 className="text-3xl font-bold gradientText">
                    Privacy Policy<span className="text-white">.</span>
                </h1>
                <p className="text-xs">updated on: 28/12/23</p>
            </div>
            <p className="text-sm mt-3 p-3 dark:bg-secondary bg-background border rounded-lg">
                At Estore, we value your privacy and aim to provide a transparent understanding of how we use information.
                <br />
                <br />
                <b>Cookies: </b>
                We use cookies to maintain session information, which helps enhance your browsing experience and enables certain functionality on our website. These cookies are temporary and are deleted once you close your browser.
                <br />
                <br />
                <b>Information Collection: </b>
                We do not collect personal information unless voluntarily provided by you through forms or communications. Any information collected is used solely for the purpose of processing orders, improving our services, or responding to inquiries.
                <br />
                <br />
                <b>Third-Party Services: </b>
                We may utilize third-party services that could use cookies or similar technologies. These services help us analyze website traffic or provide additional functionality. Please refer to the respective privacy policies of these third parties for more information on their practices.
                <br />
                <br />
                <b>Data Security: </b>
                We employ industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is entirely secure. While we strive to protect your data, we cannot guarantee absolute security.
                <br/>
                <br/>
                <b>Your Consent: </b>
                By using our website, you consent to the use of cookies as described in this policy. You can modify your browser settings to control or block cookies, although this might affect certain functionalities of the site.
                <br />
                <br />
                <b>Changes to this Policy: </b>
                We reserve the right to update or make changes to this Privacy Policy. Any revisions will be posted on this page. We encourage you to review this policy periodically for any updates.
                <br />
                <br />

                If you have any questions or concerns about our Privacy Policy, please contact us through our Contact Page.
            </p>
        </div>
    )
}