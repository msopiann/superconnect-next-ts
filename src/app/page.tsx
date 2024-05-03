"use client";

import { useChat } from "ai/react";
import Messages from "@/components/Messages";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32">
      <Messages messages={messages} />

      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <input
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input px-3 text-sm ring-offset-background text-black"
          value={input}
          placeholder="Ask about anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
