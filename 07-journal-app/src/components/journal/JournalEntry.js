import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1580796857992-QIDY33K0A4CQRZZ9R02O/ke17ZwdGBToddI8pDm48kPeY6G3Am2AqzWt16SMmmL57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jAoOkRmPE63FUjiJOEKAz7zEjJZOvfH-n6EtTQP8dn2EmOK6BJd8dNzArKK9YRq7Q/IMG_0266.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
