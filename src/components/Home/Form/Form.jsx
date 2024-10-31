import './Form.scss';

const Form = () => {
  return (
    <section className="contact-form">
      <h2>Ready to Build Something Amazing?</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Form;
