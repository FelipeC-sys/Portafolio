import './Profile.css'

export const Profile = () => {
    return (
        <div className="portfolio">

            {/* ENCABEZADO */}
            <header className="hero">

                <img
                    src="/image/FOTO DO.jpg"
                    alt="Profile"
                    className="Profile-image"
                />
                <br />

                <h1>ANDRES FELIPE GALLEGO CARVAJAL</h1>

                <h2>Desarrollador Full Stack</h2>

                <p>
                    Me gusta transformar ideas en proyectos digitales simples, atractivos y funcionalez.
                </p>

                <div className="socials">

                    <a
                        href="https://github.com/FelipeC-sys"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/andr%C3%A9s-felipe-gallego-9a427bb5/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                </div>
                <a href="#" className="cv-button">
                    Ver mi CV
                </a>

            </header >


            {/* SOBRE MÍ */}
            < section className="section" id="about" >

                <h2>SOBRE MÍ</h2>

                <p>
                    Soy un desarrollador apasionado por la tecnología
                    y la creación de aplicaciones web. Me gusta aprender
                    nuevas herramientas y convertir ideas en soluciones
                    funcionales y modernas.
                </p>

                <div className="skills">

                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>React</span>
                    <span>Angular</span>
                    <span>Node</span>
                    <span>Git</span>

                </div>

            </section >


            {/* PROYECTOS */}
            < section className="section" >

                <h2>PROYECTOS</h2>

                <div className="projects">

                    <article className="project-card">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe41yzAWDR9p3n1pLwXKUeOsPmQ459DQutqScFugj56OMfu-8HRQnQLs0&s=10"
                            height="150px"
                            alt="Angular"
                        ></img>

                        <h3>Consumo de API</h3>

                        <p>
                            Aplicación Angular v19 que consume
                            la PokéAPI y muestra un listado de
                            Pokémon con imagen, nombre y
                            detalles (altura, peso, experiencia
                            base, tipos y habilidades).
                        </p>

                        <div className="project-buttons">
                            <a href="https://github.com/FelipeC-sys/PokeAPI.git">Ver</a>
                        </div>

                    </article>


                    <article className="project-card">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZ7KgSu3KEPjdF6QzfZSY_sC3ve3mIUxdQG3DfSa_nfA9vpP4CYs9jO4&s=10"
                            height="150px"
                            alt="SGSSS"
                        ></img>

                        <h3>Libro de Aportes</h3>

                        <p>
                            funciona como un simulador de aportes
                            al SGSSS, permite registrar contratos,
                            ingresar ingresos mensuales y realizar
                            cálculos aproximados.
                        </p>

                        <div className="project-buttons">
                            <a href="https://github.com/FelipeC-sys/SGSSS/tree/main">Ver</a>
                        </div>

                    </article>

                    <article className="project-card">

                        <img
                            src="https://ismg-cdn.nyc3.cdn.digitaloceanspaces.com/articles/springshell-spring-cloud-function-bugs-need-urgent-patching-showcase_image-4-a-18822.jpg"
                            height="150px"
                            alt="Micromarket"
                        ></img>

                        <h3>Micromarket</h3>

                        <p>
                            Proyecto desarrollado como una
                            aplicación para gestionar
                            un pequeño mercado, con un sistema
                            backend desarrollado en Java con
                            Spring Boot.
                        </p>

                        <div className="project-buttons">
                            <a href="https://github.com/FelipeC-sys/Micromarket">Ver</a>
                        </div>

                    </article>

                </div>

            </section >


            {/* ESTUDIOS */}
            < section className="section" >

                <h2>ESTUDIOS</h2>

                <div className="education">

                    <div className="education-item">
                        <strong>2026</strong>

                        <div>
                            <h3>
                                Tecnólogo en Análisis y Desarrollo de Software
                            </h3>

                            <p>
                                formación orientada al desarrollo y uso de aplicaciones informáticas, adquiriendo conocimientos básicos
                            </p>
                        </div>
                    </div>


                    <div className="education-item">
                        <strong>2022</strong>

                        <div>
                            <h3>Tecnólogo en Topografía</h3>

                            <p>
                                Formación orientado a la medición,
                                representación y análisis del terreno
                                mediante herramientas y tecnologías
                                topográficas.
                            </p>
                        </div>
                    </div>


                    <div className="education-item">
                        <strong>2015</strong>

                        <div>
                            <h3>Bachiler Técnico</h3>

                            <p>
                                formación orientada al desarrollo y uso de aplicaciones informáticas, adquiriendo conocimientos básicos
                            </p>
                        </div>
                    </div>

                </div>

            </section >


            {/* CONTACTO */}
            < section className="contact" id="contact" >

                <h2>CONTACTO</h2>

                <p>
                    📧 andrezx00@gmail.com
                </p>

                <p>
                    📞 +57 311-755-1297
                </p>

                <p>
                    💻 https://github.com/FelipeC-sys
                </p>

            </section >


            {/* FOOTER */}
            < footer >

                <p>
                    © 2026 Felipe C · Desarrollado con React
                </p>

            </footer >

        </div >
    )
}