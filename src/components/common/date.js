export function today() {
  const today = new Date();
  const date = today.toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  return date;
}

export function yesterday() {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const date = yesterday.toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  return date;
}

export function tomorrow() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const date = tomorrow.toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  return date;
}

// const month = date.toLocaleString("default", { month: "short" });
