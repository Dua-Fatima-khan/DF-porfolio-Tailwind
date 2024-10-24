"use client"; // This is required for Next.js 13 with React Server Components
import React, { FormEvent } from "react"; // Import React and FormEvent
import { Button } from "./ui/button"; // Ensure this is the correct path to your Button component

function ContactForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Accessing the API URL from environment variables
    const accessKey = `154b68cf-15ec-4cbf-8140-069fa1c6e3d8` ; // Use the new variable

    if (!accessKey) {
      alert("Access key is not defined.");
      return;
    }

    const formData = {
      access_key: accessKey, // Include the access key in the body
      name: (e.target as HTMLFormElement).name.valueOf,
      email: (e.target as HTMLFormElement).email.value,
      message: (e.target as HTMLFormElement).message.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // Log the response for debugging

      if (result.success) {
        alert("Your message has been submitted successfully!");
        (e.target as HTMLFormElement).reset(); // Reset the form fields
      } else {
        alert(`Error: ${result.message || "There was an error submitting your message. Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
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
        <Button type="submit">Submit</Button> {/* Ensure Button is a submit type */}
      </form>
    </section>
  );
}

export default ContactForm;
