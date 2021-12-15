import React from 'react';

export default function MemberCard({ member }) {
  return (
    <article className="member-card">
      <h2>{member.name}</h2>
      <span>
        <strong>{member.agency}</strong>
      </span>
      <p>{member.bio}</p> {/* Fix de seguridad */}
      <img src={member.photo} alt={member.name} />
      <span className="role">{member.role}</span>
    </article>
  );
};
