import { MdAlternateEmail, MdSupportAgent } from "react-icons/md"
import Title from "../../components/Title"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div>
      <Title tag="Contact Us" title="We look forward to hearing from you." />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 py-20">
          <div className="">
            <p className="font-ubuntu text-2xl font-light w-2/3">Please let us know if you have question, want to lave a comment, or would like further information about prateek.</p>
            <div className="mt-10 space-y-5">
              <div className="border p-4 rounded-lg border-white/20 w-fit">
                <div className="bg-zinc-900 p-2 w-fit rounded-lg text-primary">
                  <MdAlternateEmail className="size-10" />
                </div>
                <p className="text-lg font-geist text-primary mt-3">Help Support</p>
                <p className="text-white/40">Email: prateek@gmail.com</p>
                <p className="text-white/50 pt-5">For help with service or refer to FAQs.</p>
              </div>
              <div className="border p-4 rounded-lg border-white/20 w-fit">
                <div className="bg-zinc-900 p-2 w-fit rounded-lg text-primary">
                  <MdSupportAgent className="size-10" />
                </div>
                <p className="text-lg font-geist text-primary mt-3">Call Us</p>
                <p className="text-white/40">Phone: 01-664578</p>
                <p className="text-white/40">Phone: +977-9875647898</p>
                <p className="text-white/50 pt-5">Call us to speak to a member of our team.</p>
              </div>
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact