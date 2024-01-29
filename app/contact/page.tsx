'use client';
import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact us';
  }, []);
  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      This is Contact Page
    </div>
  );
};

export default ContactPage;
