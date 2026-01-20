const Contact = () => {
    return (
        <section id="contact">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Contact Me</h2>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                        <textarea
                            rows="5"
                            placeholder="How can I help you?"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #d1d5db',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        style={{ width: '100%', marginTop: '1rem' }}
                    >
                        Send Message
                    </button>
                </form>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Or connect with me on</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem' }}>LinkedIn</a>
                        <a href="https://github.com/miki12-gech" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem' }}>GitHub</a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem' }}>Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
