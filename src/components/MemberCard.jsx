import React from 'react';

function createMarkup(markup) {
  return {
    __html: markup,
  };
}

export default function MemberCard({ member }) {
  return (
    <article className="member-card">
      <h2>{member.name}</h2>
      <span>
        <strong>{member.agency}</strong>
      </span>
      <p dangerouslySetInnerHTML={createMarkup(member.bio)} />
      <img src={member.photo} alt={member.name} />
      <span className="role">{member.role}</span>
    </article>
  );
};
