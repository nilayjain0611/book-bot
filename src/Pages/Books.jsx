import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Books.css'; // Assuming you have a CSS file for styling
import Header from '../Components/Header';


function Books() {
  const [books, setBooks] = useState([]);
  const supabaseUrl = 'https://wqvjmhnwzudrkntmkjyk.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdmptaG53enVkcmtudG1ranlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzA3MjA1MiwiZXhwIjoyMDI4NjQ4MDUyfQ.ZI4sLjqScurVnsa-84loT_r7Gf3fLsAXHfxWR8WoLy0';
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    async function fetchBooks() {
      try {
        // Fetch all books from Supabase
        const { data, error } = await supabase.from('books').select('*');

        if (error) {
          throw error;
        }

        // Set the books data in state
        setBooks(data || []);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    }

    fetchBooks();
  }, []);
  const handleSearch = (searchTerm) => {
    const filtered = books.filter(book => 
      book.AUTHOR.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.TITLE.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.DEPARTMENT.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  return (
    
    <div className="books-container">
        < Header/>
        
      <table>
        <thead>
          <tr>
            <th>Accession No</th>
            <th>Title</th>
            <th>Edition</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Vendor</th>
            <th>Year of Publication</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Bill No</th>
            <th>Department</th>
            <th>Copies</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.ACCESSIONNO}</td>
              <td>{book.TITLE}</td>
              <td>{book.EDITION}</td>
              <td>{book.AUTHOR}</td>
              <td>{book.PUB}</td>
              <td>{book.VENDOR}</td>
              <td>{book.YEAROFPUB}</td>
              <td>{book.PAGES}</td>
              <td>{book.PRICE}</td>
              <td>{book.BILLNO}</td>
              <td>{book.DEPARTMENT}</td>
              <td>{book.COPIES}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
