import React, { useEffect, useState } from 'react';
import { Deserializer } from 'jsonapi-serializer';
import ExpeditionCard from '../components/ExpeditionCard';
import Loading from '../components/Loading';
import api from '../api';

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getExpeditions()
      .then((data) => (
        new Deserializer({ keyForAttribute: 'camelCase' })
          .deserialize(data, (_error, expeditionList) => setExpeditions(expeditionList))
      ))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <p>There was an error loading the expeditions list</p>;
  }

  return (
    <div className="expeditions-container">
      <h1>ISS recent expeditions</h1>
      {loading ? (
        <Loading large />
      ) : (
        <div className="expeditions-list">
          {expeditions.map((expedition) => (
            <ExpeditionCard key={expedition.id} expedition={expedition} />
          ))}
        </div>
      )}
    </div>
  );
}
