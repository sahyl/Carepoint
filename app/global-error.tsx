"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Optionally log the error to the console or send it to another error logging service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* Render a generic error message without a status code */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
