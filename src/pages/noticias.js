import React from "react";
import {
  ProjectsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function PublicacionesPage() {
  return (
    <>
      <Seo title="Grupo Informática educativa" />
      <Page useSplashScreenAnimation>
      <ProjectsSection sectionId="features" heading="Noticias y actividad reciente" />
      </Page>
    </>
  );
}
