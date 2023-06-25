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
      <Seo title="Grupo Informática educativa - Universidad del Norte" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="Hero" />
        <ProjectsSection sectionId="projects" heading="Noticias y actividad reciente" />
        <ArticlesSection sectionId="articles" heading="Proyectos recientes" sources={['blog']} />
        <ContactSection sectionId="contacto" heading="Contacto" />
      </Page>
    </>
  );
}
