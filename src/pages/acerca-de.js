import React from "react";
import {
  AboutSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function AcercaPage() {
  return (
    <>
      <Seo title="Grupo Informática educativa" />
      <Page useSplashScreenAnimation>
        <AboutSection sectionId="about" heading="Acerca del grupo" />
        <InterestsSection sectionId="details" heading="Details" />
      </Page>
    </>
  );
}
