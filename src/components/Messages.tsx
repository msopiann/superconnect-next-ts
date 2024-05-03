import React from "react";
import Markdown from "./Markdown";
import { Message } from "ai/react";
import BotIcon from "./BotIcon";
import UserIcon from "./UserIcon";

type Props = {
  messages: Message[];
};

const Messages = ({ messages }: Props) => {
  return (
    <>
      {messages.map((items) => (
        <div
          key={items.id}
          className={`border-t border-black/10 ${
            items.role === "user" && "bg-slate-700"
          }`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            {items.role === "assistant" ? (
              <BotIcon />
            ) : items.role === "user" ? (
              <UserIcon />
            ) : null}
            <span className="ml-3">
              <Markdown text={items.content} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Messages;
