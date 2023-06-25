import React from "react";
import {

  ArticlesSection,
  ContactSection,
  HeroSection,

  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Grupo Informática educativa" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="Noticias y actividad reciente" />
        <ArticlesSection sectionId="articles" heading="Proyectos recientes" sources={['blog']} />
        <ContactSection sectionId="contacto" heading="Contacto" />
      </Page>
    </>
  );
}
