import React from 'react';

const Forecast = ({ forecastData }) => {
    return (
        <div className="forecast-section">
            <h3>Prévisions sur 5 jours</h3>
            <div className="forecast-grid">
                {forecastData.map((forecast, index) => (
                    <div key={index} className="forecast-day">
                        <h4>{new Date(forecast.dt_txt).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                        })}</h4>
                        <img
                            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                            alt={forecast.weather[0].description}
                        />
                        <p>{Math.round(forecast.main.temp)}°C</p>
                        <p>{forecast.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
