import React from "react";

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");

  const parsedResponse:Book[] = await response.json();

  console.log("Books >>>", parsedResponse);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {parsedResponse.map((book, index) => (
      <div
        key={index}
        className="bg-gray-200 p-4 rounded shadow"
      
      >
        <p><strong>Book ID:</strong> {book.id}</p>
        <p><strong>Name:</strong> {book.name}</p>
        <p><strong>Type:</strong> {book.type}</p>
        <p><strong>Availability:</strong> {`${book.available}`}</p>
      </div>
    ))}
  </div>
  );
};

export default Page;