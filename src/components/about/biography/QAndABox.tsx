import React from 'react';

export default function QAndABox({ text }: { text: string }) {
  return (
    <h2 className="w-[80vw] transition border-4 border-zinc-800/50 hover:bg-zinc-800/40 rounded-md text-center py-5">
      {text}
    </h2>
  );
}
