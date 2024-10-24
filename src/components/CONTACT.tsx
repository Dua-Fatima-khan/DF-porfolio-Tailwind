"use client";
import { Button } from "./ui/button";

function ContactForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "154b68cf-15ec-4cbf-8140-069fa1c6e3d8",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    
    if (result.success) {
      alert("Your message has been submitted successfully!");
      e.target.reset(); // Reset the form fields
      console.log(result);
    } else {
      alert("There was an error submitting your message. Please try again.");
    }
  }

  return (
    <section className="w-full pt-28 flex flex-col justify-center items-center text-div bg-black">
      <h2 className="text-center text-4xl py-10">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="gap-5 flex flex-col justify-center items-start text-div playfair text-1xl"
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-96 h-10 border border-div rounded p-5 placeholder:text-div italic bg-transparent"
          required
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-96 h-10 border border-div rounded p-5 placeholder:text-div italic bg-transparent"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Type Message here..."
          className="w-96 h-56 border border-div rounded p-5 placeholder:text-div italic resize-none bg-transparent"
          required
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
}

export default ContactForm;
