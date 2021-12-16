import React from "react";

export default function FooterComponent() {
  return (
    <div className="relative mt-12">
      <div className="absolute bottom-0 w-full">
        <p className="text-center mb-6">
          kenging{" "}
          <a
            href="https://github.com/aristrisnawan"
            target="_blank"
            className="text-blue-600"
          >
            aristrisnawan
          </a>{" "}
          👀
        </p>
      </div>
    </div>
  );
}
