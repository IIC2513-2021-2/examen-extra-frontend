import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Deserializer } from 'jsonapi-serializer';
// import MemberCard from '../components/MemberCard';
import config from '../config';
import Loading from '../components/Loading';

export default function ExpeditionDetail() {
  const { id } = useParams();

  const [expedition, setExpedition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
          <h1>{expedition?.name}</h1>
          <span>Start on {expedition && format(parseISO(expedition.startDate), 'PPP')}</span>
          <span>{expedition?.endDate ? `End on ${format(parseISO(expedition.endDate), 'PPP')}` : 'Current mission'}</span>
          <p>{expedition?.description}</p> {/* Fix de seguridad */}
        </section>
        <img alt={expedition?.name} src={expedition?.patch} />
      </div>

      <section className="expedition-secondary">
        <h2>Members</h2>
        <Loading />
      </section>
    </>
  );
};
