import './Map.scss';

const Map = () => {
  return (
    <section className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
};

export default Map;
