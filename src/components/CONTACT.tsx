"use client";

import { Button } from '@/components/ui/button'; // Ensure the path is correct

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    alert('Message sent!');
    e.currentTarget.reset(); // Reset the form fields
  };

  return (
    <section className="w-full pt-28 flex flex-col justify-center items-center text-div bg-black">
      <h2 className="text-center text-4xl py-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="gap-5 flex flex-col justify-center items-start text-div playfair text-1xl">
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-96 h-10 border border-div rounded p-5 placeholder:text-div italic bg-transparent"
          required
        />
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-96 h-10 border border-div rounded p-5 placeholder:text-div italic bg-transparent"
          required
        />
        <textarea
          id="message"
          placeholder="Type Message here..."
          className="w-96 h-56 border border-div rounded p-5 placeholder:text-div italic resize-none bg-transparent"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
