import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import issPhoto from '../assets/iss.jpg'; // Source: https://www.flickr.com/photos/nasa2explore/51712323479

function formatDate(date) {
  const [month, ...rest] = format(parseISO(date), 'PPP').split(' ');
  return `${month} ${rest[rest.length - 1]}`;
}

export default function ExpeditionCard({ expedition }) {
  return (
    <article className="expedition-card">
      <div className="img-container">
        <img src={expedition.patch || issPhoto} alt={expedition.name} />
      </div>
      <div className="expedition-summary">
        <h2>{expedition.name}</h2>
        <span>
          From
          {' '}
          {formatDate(expedition.startDate)}
          {' '}
          to
          {' '}
          {expedition.endDate ? formatDate(expedition.endDate) : 'Today'}
        </span>
      </div>
      <Link className="btn" to={`/expeditions/${expedition.id}`}>More</Link>
    </article>
  )
};
