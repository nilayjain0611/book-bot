import React, { useState, useEffect } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { createClient } from '@supabase/supabase-js';

function Home() {
  // Initialize Supabase client
  const supabaseUrl = 'https://wqvjmhnwzudrkntmkjyk.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdmptaG53enVkcmtudG1ranlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzA3MjA1MiwiZXhwIjoyMDI4NjQ4MDUyfQ.ZI4sLjqScurVnsa-84loT_r7Gf3fLsAXHfxWR8WoLy0';
  const supabase = createClient(supabaseUrl, supabaseKey);

  // State variables to hold the count of books and other data
  const [totalBooks, setTotalBooks] = useState(0);
  const [issuedBooks, setIssuedBooks] = useState(0);
  const [students, setStudents] = useState(0);
  const [projects, setProjects] = useState(0);

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch count of books from Supabase
        const { count: bookCount, error: bookError } = await supabase.from('books').select('*', { count: 'exact' });
        if (bookError) {
          throw bookError;
        }
        setTotalBooks(bookCount);

        // Fetch other data from Supabase as needed
        // Example:
        // const { count: issuedBooksCount, error: issuedBooksError } = await supabase.from('issued_books').select('*', { count: 'exact' });
        // if (issuedBooksError) {
        //   throw issuedBooksError;
        // }
        // setIssuedBooks(issuedBooksCount);
        // Similarly fetch other data

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>DASHBOARD</h1>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL BOOKS</h3>
            <MenuBookIcon className='icon'/>
          </div>
          <h1>{totalBooks}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL STUDENTS</h3>
            <MenuBookIcon className='icon'/>
          </div>
          <h1>{totalBooks}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL PROJECTS</h3>
            <MenuBookIcon className='icon'/>
          </div>
          <h1>1912</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ISSUED BOOKS</h3>
            <MenuBookIcon className='icon'/>
          </div>
          <h1>70</h1>
        </div>

        {/* Render other cards with similar structure */}

      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={[]} // Pass real-time data here
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={[]} // Pass real-time data here
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
