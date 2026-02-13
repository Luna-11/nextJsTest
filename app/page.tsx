"use client";

import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#A00C21] p-6">

      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border-[6px] border-[#310101]">

        {/* Header */}
        <div className="border-b border-[#310101] p-4 text-center">
          <h1 className="text-3xl font-serif text-[#310101]">
            The Cupids Post
          </h1>
        </div>

        {/* Content */}
        <div className="p-10 text-center">

          <h2 className="text-4xl text-[#A00C21] mb-6">
            Will you be my Valentine?
          </h2>

          {/* Buttons */}
          <div className="flex justify-center gap-6">

            <button
              onClick={() => setResponse("yes")}
              className="px-6 py-3 rounded-full bg-[#DE5F7F] text-white hover:bg-[#F592A2]"
            >
              Yes 💖
            </button>

            <button
              onClick={() => setResponse("no")}
              className="px-6 py-3 rounded-full bg-[#720307] text-white hover:bg-[#310101]"
            >
              No 💔
            </button>

          </div>

          {/* Response */}
          {response === "yes" && (
            <p className="mt-6 text-xl text-[#A00C21]">
              You made my heart happy ❤️
            </p>
          )}

          {response === "no" && (
            <p className="mt-6 text-xl text-[#720307]">
              My heart is broken 💔
            </p>
          )}

        </div>

      </div>

    </main>
  );
}
