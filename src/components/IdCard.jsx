import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <article
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        border: '1px black solid',
        margin: 20,
        width: 500,
        padding: 8,
      }}
    >
      <img src={picture} alt={`${firstName}'s picture`} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'flex-start',
        }}
      >
        <p style={{ margin: 0 }}>
          <b>First name: </b>
          {firstName}
        </p>
        <p style={{ margin: 0 }}>
          <b>Last name: </b>
          {lastName}
        </p>
        <p style={{ margin: 0 }}>
          <b>Gender: </b>
          {gender}
        </p>
        <p style={{ margin: 0 }}>
          <b>Height: </b>
          {Math.floor((height * 100) / 100)}m
        </p>
        <p style={{ margin: 0 }}>
          <b>Birth: </b>
          {birth
            .toString()
            .replace(' 01:00:00 GMT+0100 (Western European Summer Time)', '')}
        </p>
      </div>
    </article>
  );
}

export default IdCard;
