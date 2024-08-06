import '../Contact/Contact.css'

function Contact() {
    return (
        <>
            <section className="sectionContacts">
                <div className="wrapperContacts">
                    <div className="left">
                    <h1>Entre em Contato</h1>
                        <form className="contactForm">
                            <div className="nameFields">
                                <div className="field">
                                    <label htmlFor="name">Nome:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="field">
                                    <label htmlFor="surname">Telefone</label>
                                    <input type="number" id="surname" name="surname" required />
                                </div>
                            </div>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="right">
                        <img className='imgContatct' src="register.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
