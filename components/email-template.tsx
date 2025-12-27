import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  dates: string;
  details: string;
}

export function EmailTemplate({ name, email, dates, details }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#1e40af', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
        New Dog Sitting Inquiry
      </h1>
      
      <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <h2 style={{ color: '#334155', marginTop: '0' }}>Contact Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        
        <h2 style={{ color: '#334155', marginTop: '24px' }}>Booking Details</h2>
        <p><strong>Dates Needed:</strong> {dates}</p>
        
        <h2 style={{ color: '#334155', marginTop: '24px' }}>Dog & Care Details</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{details}</p>
      </div>
      
      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#dbeafe', borderRadius: '8px' }}>
        <p style={{ margin: '0', color: '#1e40af' }}>
          💡 <strong>Reply to this email to respond directly to {name}</strong>
        </p>
      </div>
    </div>
  );
}