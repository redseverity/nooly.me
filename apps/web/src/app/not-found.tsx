"use client";

export default function Error() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-4">
      <h2 className="text-center text-xl">
        {"Oops! We can't find that page."}
      </h2>
      <span className="text-xl">404</span>
    </main>
  );
}
