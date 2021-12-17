import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Deserializer } from 'jsonapi-serializer';
import MemberCard from '../components/MemberCard';
import issPhoto from '../assets/iss.jpg'; // Source: https://www.flickr.com/photos/nasa2explore/51712323479
import api from '../api';
import config from '../config';
import Loading from '../components/Loading';

export default function ExpeditionDetail() {
  const { id } = useParams();

  const [expedition, setExpedition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [members, setMembers] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${config.API_URL}/api/expeditions/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return null;
        }
        return response.json();
      })
      .then((data) => new Deserializer({ keyForAttribute: 'camelCase' }).deserialize(data, (_error, expeditionData) => setExpedition(expeditionData)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (expedition) {
      setLoadingMembers(true);
      api.getExpeditionMembers(id)
        .then((data) => (
          new Deserializer({ keyForAttribute: 'camelCase' })
            .deserialize(data, (_error, memberList) => setMembers(memberList))
        ))
        .catch(() => setError(true))
        .finally(() => setLoadingMembers(false));
    }
  }, [expedition, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>There was an error loading the expedition data</p>;
  }

  return (
    <>
      <div className="expedition-main">
        <section>
          <h1>
            {expedition?.name}
            <Link className="btn" to={`/expeditions/${expedition?.id}/edit`}>Edit</Link>
          </h1>
          <span>Start on {expedition && format(parseISO(expedition.startDate), 'PPP')}</span>
          <span>{expedition?.endDate ? `End on ${format(parseISO(expedition.endDate), 'PPP')}` : 'Current mission'}</span>
          <p>{expedition?.description}</p> {/* Fix de seguridad */}
        </section>
        <img alt={expedition?.name} src={expedition?.patch || issPhoto} />
      </div>

      <section className="expedition-secondary">
        <h2>Members</h2>
        {loadingMembers ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : (
          <div className="members-list">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
