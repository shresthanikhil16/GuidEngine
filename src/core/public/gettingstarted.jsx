import React, { useState } from 'react';

const MusicSelection = () => {
    const [currentPage, setCurrentPage] = useState(1); // Toggle between pages
    const genres = [
        'Country', 'Electronic', 'Funk', 'Hip hop',
        'Jazz', 'Latin', 'Pop', 'Punk',
        'R&B', 'Rock', 'Metal', 'Soul music'
    ];

    const instruments = [
        { name: 'Guitar', image: '/path/to/guitar.png' },
        { name: 'Ukulele', image: '/path/to/ukulele.png' },
        { name: 'Piano', image: '/path/to/piano.png' },
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {/* Page Content */}
            {currentPage === 1 && (
                <div>
                    <h1>Choose your interest..</h1>
                    <p>what rises the fuzziness in you</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                        {genres.map((genre, index) => (
                            <button
                                key={index}
                                style={{
                                    padding: '10px 20px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                            onClick={() => setCurrentPage(2)}
                        >
                            NEXT
                        </button>
                    </div>
                </div>
            )}

            {currentPage === 2 && (
                <div>
                    <h1>Choose an instrument...</h1>
                    <p>which sound moves you</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        {instruments.map((instrument, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        background: `url(${instrument.image}) no-repeat center/cover`,
                                        borderRadius: '10px',
                                        margin: '0 auto',
                                    }}
                                />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{instrument.name}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                background: '#f38181',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                            onClick={() => setCurrentPage(1)}
                        >
                            BACK
                        </button>
                    </div>
                </div>
            )}

            {/* Sliding Toggles */}
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <div
                    onClick={() => setCurrentPage(1)}
                    style={{
                        width: '10px',
                        height: '10px',
                        background: currentPage === 1 ? '#000' : '#ccc',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                />
                <div
                    onClick={() => setCurrentPage(2)}
                    style={{
                        width: '10px',
                        height: '10px',
                        background: currentPage === 2 ? '#000' : '#ccc',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    );
};

export default MusicSelection;
