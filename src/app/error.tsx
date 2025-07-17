"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1>Что-то пошло не так</h1>
      <p>{error?.message || "Неизвестная ошибка"}</p>
      <button onClick={reset} style={{ marginTop: 20 }}>
        Попробовать снова
      </button>
    </div>
  );
}
