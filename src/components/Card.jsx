import React from 'react';

const Card = ({ title, description, imageUrl }) => (
  <div style={cardStyle}>
    <img src={imageUrl} alt={title} style={imageStyle} />
    <div style={contentStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
      <p style={placeholderStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nisl ac purus tincidunt, nec convallis nisl viverra. Aliquam erat volutpat.
      </p>
      <button className='hovew' style={buttonStyle}>Buy Now</button>
    </div>
  </div>
);

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  maxWidth: '300px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%', 
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '15px',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const titleStyle = { margin: '0 0 10px', fontSize: '1.25rem', color: '#333' };
const descriptionStyle = { margin: '0', fontSize: '0.9rem', color: '#555' };
const placeholderStyle = {
  margin: '10px 0 15px',
  fontSize: '0.9rem',
  color: '#777',
  lineHeight: '1.4',
  maxHeight: '60px', 
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  textAlign: 'center',
  marginTop: '10px', 
};

export default Card;
